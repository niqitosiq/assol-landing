<script>
  import { createEventDispatcher } from 'svelte';
  import Image from 'svelte-image';
  import QuizProgress from './QuizProgress.svelte';

  export let step;
  export let questions;
  let questionCount;
  let activeStep;
  $: activeStep = questions[step];
  $: questionCount = questions.length;

  const dispatch = createEventDispatcher();

  const setAnswer = ({ label }) => {
    questions[step].answer = label;
    dispatch('nextStep');
  };
</script>

{step}

<div class="quiz">
  <div class="info">
    <p>За 12 лет опыта мы довели наши технологии строительства мебели</p>
    <h3>+15%</h3>
    <Image src="/img/quiz/info.png" />
  </div>
  <div class="interview">
    <QuizProgress {step} {questionCount} />

    <div class="question">
      <h4>{activeStep.question}</h4>
      <div class="options">
        {#each activeStep.options as option}
          <div class="option" on:click={() => setAnswer(option)}>
            {option.label}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .quiz {
    display: flex;
  }
</style>
