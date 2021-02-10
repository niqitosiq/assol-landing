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
        <Image src="/img/advantages/cupboard.png" lazy={false} />
      </div>

      <div class="services">
        <div class="service">
          <div class="service-wrapper">
            <div class="image">
              <Image src="/g/img/service/2.jpg" />
            </div>
            <div class="description">
              <h3>Упаковка</h3>
              <p>Мы уже X-лет на рынке. Используя этот опыт</p>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="service-wrapper">
            <div class="image">
              <Image src="/g/img/service/2.jpg" />
            </div>
            <div class="description">
              <h3>Упаковка</h3>
              <p>Мы уже X-лет на рынке. Используя этот опыт</p>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="service-wrapper">
            <div class="image">
              <Image src="/g/img/service/2.jpg" />
            </div>
            <div class="description">
              <h3>Упаковка</h3>
              <p>Мы уже X-лет на рынке. Используя этот опыт</p>
            </div>
          </div>
        </div>
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

  .services {
    position: absolute;
    left: calc(100% - 100px);
    top: 104px;
    z-index: 15;
  }

  .service {
    margin-top: -5px;
    width: 368px;
    height: 159px;
    padding: 5px;
    position: relative;
    &-wrapper {
      height: 147px;
      display: flex;
      position: relative;
      align-items: center;
      z-index: 2;
      transition: transform ease 0.3s;
      &:after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        pointer-events: none;
      }
    }
    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      border-radius: 5px;
      z-index: 1;
    }
    &:after {
      box-shadow: 0px 5.58354px 19.5424px rgba(0, 0, 0, 0.05);
      left: 0;
      top: 0;
      transition: transform ease 0.3s;
      transform: translateY(0px);
    }
    &:before {
      box-shadow: 0px 3.08491px 79.705px rgba(0, 0, 0, 0.1);
      top: 5px;
      left: 5px;
      width: calc(100% - 10px);
      transition: transform ease 0.3s;
      transform: translateY(0px);
      transform-origin: center bottom;
    }
    &:hover {
      &:after,
      .service-wrapper {
        transform: translateY(-5px);
      }
      &:before {
        transform: translateY(-4px);
      }
    }
    .image {
      flex-shrink: 0;
      width: 170px;
      height: 100%;
      margin-right: 26px;
    }
  }
</style>
