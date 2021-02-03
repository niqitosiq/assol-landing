<script>
  import QuizLead from './QuizLead.svelte';
  import Slider from './Slider.svelte';
  import Image from 'svelte-image';
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
  import { initParallax } from '../../utils/parallax';

  const initAnimations = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.main',
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      })
      .to(
        '.decor-1',
        {
          y: 300,
          duration: 6,
          pin: true,
        },
        '0',
      )
      .to(
        '.decor-2',
        {
          y: -100,
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
        selector: '.decor-1 .wrapper',
        offset: -80,
      },
      {
        selector: '.decor-2 .wrapper',
        offset: -60,
      },
    ]);
  });
</script>

<div id="main" class="main container">
  <div class="description">
    <h1>
      Создаем мебель <br />
      любой сложности <br />
      из древесных плит
    </h1>
    <p>
      Мы уже X-лет на рынке. Используя этот опыт, <br />
      мы оптимизируем смету и поможем вам сэкономить
    </p>
    <QuizLead />
  </div>
  <Slider />
</div>

<div class="decor-1">
  <Image src="/img/background/1.png" />
</div>
<div class="decor-2">
  <Image src="/img/background/2.png" />
</div>

<style lang="scss">
  .main {
    display: flex;
    justify-content: space-between;
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 19px;
    color: #292929;
    opacity: 0.3;
  }
  .decor-1 {
    width: 160px;
    height: 160px;
    position: absolute;
    left: calc(50% + var(--container-width) / 2);
    top: 0px;
  }
  .decor-2 {
    width: 220px;
    position: absolute;
    left: calc(45% - var(--container-width) / 2);
    bottom: 0px;
  }
</style>
