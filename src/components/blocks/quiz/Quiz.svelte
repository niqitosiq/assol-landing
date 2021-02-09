<script>
  import { createEventDispatcher } from 'svelte';

  export let step;
  export let questions;

  let activeStep;
  $: activeStep = questions[step];

  const dispatch = createEventDispatcher();

  const setAnswer = ({ label }) => {
    questions[step].answer = label;
    dispatch('nextStep');
  };
</script>

{step}

{#each activeStep.options as option}
  <div class="question" on:click={() => setAnswer(option)}>
    {option.label}
  </div>
{/each}
