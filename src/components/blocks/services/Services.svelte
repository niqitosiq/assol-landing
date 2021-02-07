<script>
  import Header from '../../ui/Header.svelte';
  import Slider from './Slider.svelte';

  const header = {
    name: 'Услуги',
    header:
      'За 12 лет опыта мы довели наши технологии строительства мебели до идеала и выкладываемся на каждом этапе',
    description:
      'Мы уже X-лет на рынке. Используя этот опыт, мы оптимизируем смету и поможем вам сэкономить',
  };
</script>

<div class="services" id="services">
  <Header {...header} />
  <Slider />
</div>

<style lang="scss">
  .services {
  }
</style>
