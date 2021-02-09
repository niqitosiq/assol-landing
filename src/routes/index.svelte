<script>
  import Main from '../components/blocks/main/Main.svelte';
  import Service from '../components/blocks/service/Service.svelte';
  import Services from '../components/blocks/services/Services.svelte';
  import Advantages from '../components/blocks/advantages/Advantages.svelte';

  import SwiperCore, { EffectFade, Pagination, Navigation } from 'swiper';

  SwiperCore.use([EffectFade, Pagination, Navigation]);
</script>

<div class="index">
  <Main />
  <Service />
  <Services />
  <Advantages />
</div>

<style lang="scss">
</style>
