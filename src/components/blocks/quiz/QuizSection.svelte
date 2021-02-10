<script>
  import Header from '../../ui/Header.svelte';
  import Quiz from './Quiz.svelte';

  const header = {
    name: 'Квиз-опрос',
    header: 'Узнайте стоимость работы по вашим запросам',
  };

  let step = 0;
  let questions = [
    {
      answer: null,
      question: 'Какую мебель будем делать?',
      options: [
        {
          label: 'Диван',
          img: '1',
        },
        {
          label: 'Диван1',
          img: '2',
        },
        {
          label: 'Диван2',
          img: '3',
        },
        {
          label: 'Диван3',
          img: '4',
        },
        {
          label: 'Диван4',
          img: '5',
        },
        {
          label: 'Диван5',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?',
      options: [
        {
          label: 'Диван',
          img: '1',
        },
        {
          label: 'Диван1',
          img: '2',
        },
        {
          label: 'Диван2',
          img: '3',
        },
        {
          label: 'Диван3',
          img: '4',
        },
        {
          label: 'Диван4',
          img: '5',
        },
        {
          label: 'Диван5',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?',
      options: [
        {
          label: 'Диван',
          img: '1',
        },
        {
          label: 'Диван1',
          img: '2',
        },
        {
          label: 'Диван2',
          img: '3',
        },
        {
          label: 'Диван3',
          img: '4',
        },
        {
          label: 'Диван4',
          img: '5',
        },
        {
          label: 'Диван5',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?',
      options: [
        {
          label: 'Диван',
          img: '1',
        },
        {
          label: 'Диван1',
          img: '2',
        },
        {
          label: 'Диван2',
          img: '3',
        },
        {
          label: 'Диван3',
          img: '4',
        },
        {
          label: 'Диван4',
          img: '5',
        },
        {
          label: 'Диван5',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?',
      options: [
        {
          label: 'Диван',
          img: '1',
        },
        {
          label: 'Диван1',
          img: '2',
        },
        {
          label: 'Диван2',
          img: '3',
        },
        {
          label: 'Диван3',
          img: '4',
        },
        {
          label: 'Диван4',
          img: '5',
        },
        {
          label: 'Диван5',
          img: '6',
        },
      ],
    },
  ];

  const nextStep = () => {
    step++;
  };
</script>

<div id="quiz">
  <div class="container">
    <Header {...header} />

    <Quiz {step} bind:questions on:nextStep={nextStep} />
  </div>
</div>

<style>
  #quiz {
    margin-top: 150px;
  }
</style>
