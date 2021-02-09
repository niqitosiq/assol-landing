<script>
  import Header from '../../ui/Header.svelte';
  import AdvantagesText from './AdvantagesText.svelte';
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
          trigger: '#advantages',
          scrub: true,
          start: 'top center',
          end: '+=100%',
        },
      })
      .to(
        '#advantages .d1',
        {
          y: -50,
          duration: 6,
          pin: true,
        },
        '0',
      )
      .to(
        '#advantages .d2',
        {
          y: -30,
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
        selector: '#advantages .d1 .wrapper',
        offset: 30,
      },
      {
        selector: '#advantages .d2 .wrapper',
        offset: 90,
      },
      {
        selector: '#advantages .advantages-text-wrapper',
        offset: 60,
      },
    ]);
  });
</script>

<div class="advantages" id="advantages">
  <div class="container">
    <Header {...header} />

    <div class="cupboard">
      <div class="decor d1">
        <Image src="/img/advantages/plant1.png" />
      </div>
      <div class="decor d2">
        <Image src="/img/advantages/plant2.png" />
      </div>
      <div class="advantages-text-wrapper">
        <AdvantagesText>
          Уникальные технологии лежащие в создание мебеле, разработы в нашей
          компании
        </AdvantagesText>
      </div>
      <div class="cupboard-image">
        <Image src="/img/advantages/cupboard.png" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .cupboard {
    margin-top: 50px;
    width: 510px;
    position: relative;
    &-image {
      position: relative;
      width: 100%;
      z-index: 10;
    }
  }
  .decor {
    position: absolute;
    pointer-events: none;
  }
  .d1 {
    width: 418px;
    left: 50px;
    transform: translateX(-100%);
  }
  .d2 {
    width: 516px;
    right: 50px;
    transform: translateX(100%);
  }
  .advantages-text-wrapper {
    position: absolute;
    right: calc(100% - 20px);
    top: 144px;
    z-index: 8;
  }
</style>
