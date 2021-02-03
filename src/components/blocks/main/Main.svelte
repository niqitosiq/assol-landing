<script>
  import QuizLead from './QuizLead.svelte';
  import Slider from './Slider.svelte';
</script>

<div id="main" class="main container">
  <div class="description">
    <h1>
      Создаем мебель <br />
      любой сложности <br />
      из древесных плит
    </h1>
    <p>
      Мы уже X-лет на рынке. Используя этот опыт, <br />
      мы оптимизируем смету и поможем вам сэкономить
    </p>
    <QuizLead />
  </div>
  <Slider />
</div>

<style lang="scss">
  .main {
    display: flex;
    justify-content: space-between;
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 19px;
    color: #292929;
    opacity: 0.3;
  }
</style>
