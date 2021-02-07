<script>
  import Header from '../../ui/Header.svelte';
  import Slider from './Slider.svelte';
  import Image from 'svelte-image';
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
  import { initParallax } from '../../utils/parallax';

  const header = {
    name: 'Услуги',
    header:
      'За 12 лет опыта мы довели наши технологии строительства мебели до идеала и выкладываемся на каждом этапе',
    description:
      'Мы уже X-лет на рынке. Используя этот опыт, мы оптимизируем смету и поможем вам сэкономить',
  };

  const initAnimations = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#services',
          scrub: true,
          start: 'top center',
          end: '+=100%',
        },
      })
      .to(
        '#services .d1',
        {
          y: 100,
          duration: 6,
          pin: true,
        },
        '0',
      )
      .to(
        '#services .d2',
        {
          y: 200,
          duration: 6,
          pin: true,
        },
        '0',
      );
  };

  onMount(() => {
    initAnimations();
    initParallax([
      {
        selector: '#services .d1 .wrapper',
        offset: -60,
      },
      {
        selector: '#services .d2 .wrapper',
        offset: -100,
      },
    ]);
  });
</script>

<div class="services" id="services">
  <div class="container">
    <Header {...header} />
    <Slider />
    <div class="decor">
      <div class="d1">
        <Image src="/img/background/3.png" />
      </div>
      <div class="d2">
        <Image src="/img/background/4.png" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .services {
    position: relative;
  }
  .container {
    position: relative;
  }
  .d1,
  .d2 {
    position: absolute;
  }
  .d1 {
    width: 271px;
    left: -50px;
    top: 100px;
  }
  .d2 {
    width: 213px;
    right: -50px;
    top: -100px;
  }
</style>
