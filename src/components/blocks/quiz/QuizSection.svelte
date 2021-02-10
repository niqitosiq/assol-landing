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
      question: 'Какую мебель будем делать?1',
      options: [
        {
          label: 'Диван1',
          img: '1',
        },
        {
          label: 'Диван11',
          img: '2',
        },
        {
          label: 'Диван21',
          img: '3',
        },
        {
          label: 'Диван31',
          img: '4',
        },
        {
          label: 'Диван41',
          img: '5',
        },
        {
          label: 'Диван51',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?2',
      options: [
        {
          label: 'Дива2',
          img: '1',
        },
        {
          label: 'Диван12',
          img: '2',
        },
        {
          label: 'Диван22',
          img: '3',
        },
        {
          label: 'Диван32',
          img: '4',
        },
        {
          label: 'Диван42',
          img: '5',
        },
        {
          label: 'Диван52',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?3',
      options: [
        {
          label: 'Диван3',
          img: '1',
        },
        {
          label: 'Диван13',
          img: '2',
        },
        {
          label: 'Диван23',
          img: '3',
        },
        {
          label: 'Диван33',
          img: '4',
        },
        {
          label: 'Диван43',
          img: '5',
        },
        {
          label: 'Диван53',
          img: '6',
        },
      ],
    },
    {
      answer: null,
      question: 'Какую мебель будем делать?4',
      options: [
        {
          label: 'Диван4',
          img: '1',
        },
        {
          label: 'Диван14',
          img: '2',
        },
        {
          label: 'Диван24',
          img: '3',
        },
        {
          label: 'Диван34',
          img: '4',
        },
        {
          label: 'Диван44',
          img: '5',
        },
        {
          label: 'Диван54',
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
