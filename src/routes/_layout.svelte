<script>
  import { onMount } from 'svelte';

  import Header from '../components/header/Header.svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);
  let loaded = false;

  onMount(() => {
    loaded = true;
  });
</script>

<main class="main" class:loaded style="opacity: 0;">
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

  main {
    transition: opacity ease 0.3s;
    &.loaded {
      opacity: 1 !important;
    }
  }
</style>
