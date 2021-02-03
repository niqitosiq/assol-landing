<script>
  import { onMount } from 'svelte';

  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import SwiperCore, { EffectFade } from 'swiper';

  SwiperCore.use([EffectFade]);

  import Div from '../../utils/Div.svelte';

  let swiper = {
    container: Div,
    slide: Div,
  };

  let client = false;

  onMount(() => {
    swiper.container = Swiper;
    swiper.slide = SwiperSlide;
    client = true;
  });

  let slides = [
    {
      img: '/g/img/slider/1.png',
      points: [
        {
          x: 15,
          y: 23,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 55,
          y: 43,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 65,
          y: 13,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 95,
          y: 53,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
      ],
    },
    {
      img: '/g/img/slider/1.png',
      points: [
        {
          x: 0,
          y: 50,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 14,
          y: 75,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 65,
          y: 10,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 10,
          y: 25,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
      ],
    },
    {
      img: '/g/img/slider/1.png',
      points: [
        {
          x: 15,
          y: 23,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 55,
          y: 43,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 65,
          y: 13,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
        {
          x: 95,
          y: 53,
          text: 'Белый брус создает уникальную обстановку на кухне',
        },
      ],
    },
  ];

  const getPointStyle = (x, y) => {
    return `top: ${y}%; left: ${x}%;`;
  };
</script>

<div class="slider" class:client>
  <svelte:component
    this={swiper.container}
    spaceBetween={0}
    slidesPerView={1}
    effect="fade"
    on:slideChange={() => console.log('slide change')}
    on:swiper={e => console.log(e.detail[0])}
  >
    {#each slides as { img, points }}
      <svelte:component this={swiper.slide}>
        <div class="slide">
          <img src={img} alt="" />
          <div class="points">
            {#each points as { x, y, text }}
              <div class="point" style={getPointStyle(x, y)}>
                <div class="point-circle" />
                <div class="point-text">
                  {text}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </svelte:component>
    {/each}
  </svelte:component>
</div>

<style lang="scss">
  .slider {
    height: 514px;
    max-width: 613px;
    width: 100%;
    :global(.swiper-container) {
      overflow: visible;
    }
    :global(.swiper-slide-active .point) {
      transform: scale(1);
      opacity: 1;
    }
  }
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .point {
    position: absolute;
    width: 30px;
    height: 30px;
    cursor: pointer;
    opacity: 0;
    transform: scale(0);
    transition: opacity ease 0.3s, transform ease 0.3s;
    &-circle {
      top: 5.5px;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      background: linear-gradient(180deg, #f67272 0%, #de031c 100%);
      z-index: 3;
      position: relative;
      &:after,
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: solid 1px var(--accent);
        z-index: 0;
        transition: transform ease 0.4s, opacity ease 0.4s;
        opacity: 1;
      }
      &:after {
        width: 152%;
        height: 152%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.2;
      }
      &:before {
        width: 242%;
        height: 242%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.2;
      }
    }
    &-text {
      position: absolute;
      background: #f4f4f4;
      border-radius: 7.22975px;
      width: 196px;
      padding: 22px 27px;
      text-align: center;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #575757;
      transform: translate(calc(-50% + 8.5px), calc(-100% - 0px));
      opacity: 0;
      pointer-events: none;
      z-index: 2;
      transition: opacity ease 0.3s 0.1s, transform ease 0.3s 0.1s;
    }
    &:hover &-text {
      opacity: 1;
      transform: translate(calc(-50% + 8.5px), calc(-100% - 8px));
    }
    &:hover &-circle {
      &:before,
      &:after {
        opacity: 0;
      }
      &:before {
        transform: translate(-50%, -50%) scale(0.42);
      }
      &:after {
        transform: translate(-50%, -50%) scale(0.65);
      }
    }

    &:nth-child(1) {
      transition-delay: 100ms;
    }
    &:nth-child(2) {
      transition-delay: 200ms;
    }
    &:nth-child(3) {
      transition-delay: 300ms;
    }
    &:nth-child(4) {
      transition-delay: 400ms;
    }
    &:nth-child(5) {
      transition-delay: 500ms;
    }
    &:nth-child(6) {
      transition-delay: 600ms;
    }
    &:nth-child(7) {
      transition-delay: 700ms;
    }
    &:nth-child(8) {
      transition-delay: 800ms;
    }
    &:nth-child(9) {
      transition-delay: 900ms;
    }
  }
</style>
