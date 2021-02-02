<script>
  import Header from '../components/header/Header.svelte';
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
