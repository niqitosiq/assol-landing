<script>
  import { onMount } from 'svelte';
  import { Swiper } from 'swiper';
  import Button from '../../ui/Button.svelte';
  import Icon from '../../ui/Icon.svelte';
  import Image from '../../ui/Image.svelte';

  let client = false;

  let slides = [
    {
      name: 'Кухня из древесного бруса',
      img: '/img/slider/1.png',
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
      name: 'Кухня из древесного бруса2',
      img: '/img/slider/1.png',
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
      name: 'Кухня из древесного бруса3',
      img: '/img/slider/1.png',
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
      name: 'Кухня из древесного бруса3',
      img: '/img/slider/1.png',
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

  const slidesCount = slides.length;

  const getPointStyle = (x, y) => {
    return `top: ${y}%; left: ${x}%;`;
  };

  let swiperIntance = {};
  let activeIndex = 0;

  let activeSlide = slides[0];

  $: activeSlide = slides[activeIndex];

  const slideChanged = () => {
    activeIndex = swiperIntance.realIndex || 0;
  };

  onMount(() => {
    swiperIntance = new Swiper('#main .swiper-container', {
      spaceBetween: 0,
      slidesPerView: 'auto',
      effect: 'fade',
      loop: true,
      navigation: {
        nextEl: '#main .slider .button.next',
        prevEl: '#main .slider .button.prev',
      },
      pagination: {
        el: '#main .slider .pagination-bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      on: {
        slideChange: slideChanged,
      },
    });
    client = true;
  });
</script>

<div class="slider" class:client>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      {#each slides as { img, points }}
        <div class="swiper-slide">
          <div class="slide">
            <div class="image"><Image src={img} alt="" /></div>
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
        </div>
      {/each}
    </div>
  </div>

  <div class="pagination">
    <div class="current">
      <div class="current-number">
        {activeIndex + 1}/{slidesCount}
      </div>
      <div class="current-name">{activeSlide.name}</div>
    </div>
    <div class="navigation">
      <div class="button prev">
        <Button>
          <Icon name="arrow" />
        </Button>
      </div>
      <div class="pagination-bullets" />
      <div class="button next">
        <Button>
          <Icon name="arrow" />
        </Button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .slider {
    height: 100%;
    width: 100%;
    max-width: 613px;
    overflow: hidden;
    opacity: 0;
    transition: opacity ease 0.3s;
    :global(.swiper-container) {
      overflow: visible;
    }
    :global(.swiper-slide-active .point) {
      transform: scale(1);
      opacity: 1;
    }
    :global(.swiper-slide) {
      width: 100% !important;
    }
    &.client {
      overflow: visible;
      opacity: 1;
    }
    @media screen and (max-width: 1080px) {
      margin-top: 80px;
    }
  }
  .slide {
    .image {
      width: 100%;
      height: 100%;
    }
    :global(img) {
      width: 100%;
    }
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
  .pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :global(svg) {
      fill: #fff;
    }
    .button {
      width: 67px;
      height: 67px;
      &.next {
        :global(svg) {
          transform: rotate(180deg);
        }
      }
    }
    .navigation {
      display: flex;
      align-items: center;
    }
    &-bullets {
      margin: 0 36px;
      :global(.swiper-pagination-bullet) {
        margin-right: 24px;
        background-color: #d8d8d8;
        width: 6px;
        height: 6px;
        transition: transform ease 0.3s, background-color ease 0.3s;
        transform: scale(1);
        opacity: 1;
        &:last-child {
          margin-right: 0;
        }
        &.swiper-pagination-bullet-active {
          background-color: #ed4852;
          opacity: 1;
          transform: scale(2);
        }
      }
    }
  }

  .current {
    display: flex;
    margin-bottom: 18px;
    &-number {
      color: #000000;
      font-size: 22px;
      opacity: 0.4;
      line-height: 34px;
    }
    &-name {
      font-size: 20px;
      line-height: 160%;
      color: #000000;
      margin-left: 20px;
    }
  }
</style>
