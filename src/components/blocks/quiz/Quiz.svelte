<script>
  import { createEventDispatcher } from 'svelte';
  import Image from 'svelte-image';
  import QuizProgress from './QuizProgress.svelte';
  import Button from '../../ui/Button.svelte';
  import { fade } from 'svelte/transition';

  export let step;
  export let questions;
  let questionCount;
  let activeStep;
  $: activeStep = questions[step];
  $: questionCount = questions.length;

  const dispatch = createEventDispatcher();

  const setAnswer = ({ label }) => {
    questions[step].answer = label;
  };

  let isAnswerSelected;
  $: isAnswerSelected = activeStep.answer !== null;

  const nextStep = () => {
    console.log('nextStep');
    dispatch('nextStep');
  };
</script>

<div class="quiz">
  <div class="info">
    <p>За 12 лет опыта мы довели наши технологии строительства мебели</p>
    <h3>+15%</h3>
    <div class="info-image">
      <Image src="/img/quiz/info.png" />
    </div>
  </div>
  <div class="interview">
    <QuizProgress {step} {questionCount} />

    <div class="question">
      <h4 transition:fade={{ duration: 400 }}>{activeStep.question}</h4>
      {#key step}
        <div
          class="options"
          in:fade={{ duration: 300, delay: 300 }}
          out:fade={{ duration: 300, delay: 0 }}
        >
          {#each activeStep.options as option, index}
            <div
              class="option"
              class:selected={activeStep.answer === option.label}
              on:click={() => setAnswer(option)}
            >
              <h5>{option.label}</h5>
              <img src="/g/img/quiz/{option.img}.png" alt="" />
            </div>
          {/each}
        </div>
      {/key}
    </div>

    <div class="next">
      <Button disabled={isAnswerSelected} on:click={nextStep}>Дальше</Button>
    </div>
  </div>
</div>

<style lang="scss">
  .quiz {
    margin-top: 50px;
    display: flex;
    max-width: 1246px;
    width: 100%;
    background-color: #fff;
    padding: 9px;
    position: relative;
    border-radius: 10px;
    &:after {
      content: '';
      width: calc(100% - 18px);
      height: calc(100% - 18px);
      top: 9px;
      left: 9px;
      border: 1px solid #e3e3e3;
      box-sizing: border-box;
      border-radius: 10px;
      z-index: 15;
      position: absolute;
      pointer-events: none;
    }
  }

  .interview {
    max-width: 719px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 56px 94px;
    box-sizing: content-box;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
    color: #333333;
    margin-bottom: 20px;
  }

  .info {
    max-width: 306px;
    width: 100%;
    background: #d64949;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-top: 80px;
    padding-left: 15px;
    p {
      font-weight: normal;
      font-size: 21px;
      line-height: 130%;
      color: #ffffff;
      margin-bottom: 14px;
    }
    h3 {
      font-weight: bold;
      font-size: 70px;
      line-height: 130%;
      color: #ffffff;
    }
    &-image {
      width: 234px;
      margin-top: 50px;
      margin-left: -13px;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &:nth-child(3) {
      position: absolute;
    }
  }

  .question {
    margin-top: 36px;
  }

  .option {
    width: calc(33.33% - 10.6px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e3e3e3;
    box-sizing: border-box;
    border-radius: 12px;
    padding-left: 20px;
    height: 100px;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      border: solid 2px var(--accent);
      z-index: 20;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity ease 0.3s;
    }
    &:hover:after {
      opacity: 0.2;
    }
    &.selected:after {
      opacity: 1;
    }
  }

  h5 {
    font-weight: 600;
    font-size: 14px;
    color: #000000;
  }

  .next {
    width: 247px;
    height: 60px;
    margin-top: 30px;
    :global(*) {
      text-transform: uppercase;
    }
  }
</style>
