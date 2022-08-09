import images from '../components/MainPage/images';

const mockdata = {
  navigation: {
    links: [
      {
        href: '/cards',
        label: 'Карточки',
      },
      {
        href: '/test',
        label: 'Тест',
      },
      {
        href: '/reading',
        label: 'Чтение',
      },
    ],
    changeTheme: 'Сменить тему',
  },
  main: {
    hero: 'Этот сайт предназначен для изучения армянского алфавита. Можно выбрать обучение карточками, а можно в любом русском тексте заменить буквы на армянские, чтобы практиковать чтение.',
    cards: [
      {
        image: 'cards' as keyof typeof images,
        title: 'Карточки',
        link: '/cards',
      },
      {
        image: 'test' as keyof typeof images,
        title: 'Тест',
        link: '/test',
      },
      {
        image: 'reading' as keyof typeof images,
        title: 'Чтение',
        link: '/reading',
      },
    ],
  },
  test: {
    results: {
      bad: 'К сожалению, ваше знание алфавита оставляет желать лучшего. Больше тренеруйтесь, и вы обязательно его выучите',
      neutral: 'Неплохой результат! Но ошибки все еще есть - стоит повторить алфавит еще несколько раз',
      good: 'Поздравляю! Теперь можно сказать, что вы выучили алфавит!'
    },
    next: 'Дальше',
    show_mistakes: 'Показать ошибки',
  }
};

export default mockdata;
