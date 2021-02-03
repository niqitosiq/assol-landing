<script>
  import Header from '../components/header/Header.svelte';
  import { gsap } from 'gsap';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
</script>

<main class="main">
  <Header />
  <div class="main-wrapper">
    <slot />
  </div>
</main>

<style lang="scss" global>
  @import '../styles/main';

  body {
    overflow-x: hidden;
  }

  .main-wrapper {
  }
</style>
