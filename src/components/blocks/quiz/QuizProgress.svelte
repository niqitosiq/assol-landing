<script>
  export let step;
  export let questionCount;
</script>

<div class="quiz-progress" />
{step}
{questionCount}

<style lang="scss">
  .quiz-progress {
    height: 30px;
    width: 300px;
    background: var(--accent) url('/icons/progress.svg') repeat-x left
      center/contain;
  }
</style>
