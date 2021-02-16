import { buffer as imagemin } from 'imagemin';
import util from 'util';
import fs from 'fs';
import path from 'path';
import klawSync from 'klaw-sync';
import mkpath from 'mkpath';

const extensionsRe = /\.(svg|png|jpg|gif|webp)$/;

const mkpathAsync = util.promisify(mkpath);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export default function optimizeImages({
  plugins = [],
  images = './src/images/',
  staticFolder = './static/img/',
} = {}) {
  const absolutePath = path.resolve(images);
  return {
    name: 'imagemin-plugin',
    async generateBundle(_, bundle) {
      const imagePaths = klawSync(absolutePath, {
        filter: file => extensionsRe.test(file.path),
        nodir: true,
        traverseAll: true,
      });

      await Promise.all(
        imagePaths.map(async item => {
          const file = fs.readFileSync(item.path);
          item.source = await imagemin(file, { plugins });
        }),
      );

      const writings = [];
      imagePaths.forEach(image => {
        const imagePath = path.relative(absolutePath, image.path);
        const fullPath = path.resolve(staticFolder, imagePath);
        const staticImageDir = path.dirname(fullPath);

        writings.push(
          mkpathAsync(staticImageDir).then(() => {
            return writeFile(fullPath, image.source).catch(error => {
              this.error(
                `Couldn't write optimized input buffer for ${image.path}: ${error}`,
              );
            });
          }),
        );
      });
      await Promise.all(writings);
    },
  };
}
