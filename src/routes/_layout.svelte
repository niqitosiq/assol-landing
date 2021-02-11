<script>
  import Header from '../components/header/Header.svelte';
  import Footer from '../components/footer/Footer.svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);
</script>

<main class="main">
  <Header />
  <div class="main-wrapper">
    <slot />
  </div>
  <Footer />
</main>

<style lang="scss" global>
  @import '../styles/main';

  body {
    overflow-x: hidden;
  }
</style>
