<script>
  import { onMount } from 'svelte';

  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import Div from '../../utils/Div.svelte';
  import Button from '../../ui/Button.svelte';
  import Icon from '../../ui/Icon.svelte';

  import Slide from './Slide.svelte';

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

  const slides = [
    {
      img: '/g/img/services/1.jpg',
      name: 'Продажа ЛДСП материалов',
      description:
        'Уникальные технологии лежащие в создание мебеле, разработы в нашей компании',
      tag: {
        label: 'Популярно',
        type: 'yellow',
      },
    },
    {
      img: '/g/img/services/1.jpg',
      name: 'Продажа ЛДСП материалов2',
      description:
        'Уникальные технологии лежащие в создание мебеле, разработы в нашей компании',
      tag: {
        label: 'Популярно',
        type: 'yellow',
      },
    },
    {
      img: '/g/img/services/1.jpg',
      name: 'Продажа ЛДСП материалов3',
      description:
        'Уникальные технологии лежащие в создание мебеле, разработы в нашей компании',
      tag: {
        label: 'Популярно',
        type: 'yellow',
      },
    },
    {
      img: '/g/img/services/1.jpg',
      name: 'Продажа ЛДСП материалов4',
      description:
        'Уникальные технологии лежащие в создание мебеле, разработы в нашей компании',
      tag: {
        label: 'Популярно',
        type: 'yellow',
      },
    },
  ];

  const getPointStyle = (x, y) => {
    return `top: ${y}%; left: ${x}%;`;
  };

  const paginationStyle = {
    el: '.services .slider .pagination-bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  let swiperIntance = {};

  const navigation = {
    nextEl: '.services .slider .button.next',
    prevEl: '.services .slider .button.prev',
  };
</script>

<div class="slider container" class:client>
  <svelte:component
    this={swiper.container}
    spaceBetween={100}
    slidesPerView="1"
    pagination={paginationStyle}
    {navigation}
    on:swiper={e => {
      swiperIntance = e.detail[0];
    }}
  >
    {#each slides as slide}
      <svelte:component this={swiper.slide}>
        <Slide {...slide} />
      </svelte:component>
    {/each}
  </svelte:component>

  <div class="button prev">
    <Button>
      <Icon name="arrow" />
    </Button>
  </div>
  <div class="button next">
    <Button>
      <Icon name="arrow" />
    </Button>
  </div>

  <div class="pagination">
    <div class="navigation">
      <div class="pagination-bullets" />
    </div>
  </div>
</div>

<style lang="scss">
  .slider {
    height: 100%;
    max-width: 709px;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    transition: opacity ease 0.7s;
    position: relative;
    margin-top: 30px;
    :global(.swiper-container) {
      overflow: visible;
    }
    :global(.swiper-slide-active .point) {
      transform: scale(1);
      opacity: 1;
    }
    :global(.swiper-slide) {
      width: auto !important;
      max-width: 100%;
    }
    &.client {
      overflow: visible;
      opacity: 1;
    }
    @media screen and (max-width: 1080px) {
      margin-top: 30px;
    }
  }
  .button {
    width: 67px;
    height: 67px;
    position: absolute;
    top: calc(50% - 40px);
    transform: translateY(-50%);
    z-index: 15;
    &.next {
      right: -38px;
      :global(svg) {
        transform: rotate(180deg);
      }
    }
    &.prev {
      left: -38px;
    }
  }
  .pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    :global(svg) {
      fill: #fff;
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
</style>
