import images from '../components/MainPage/images';

const mockdataRu = {
  navigation: {
    links: [
      {
        href: '/cards',
        label: 'Карточки',
        icon: 'copy'
      },
      {
        href: '/test',
        label: 'Тест',
        icon: 'file',
      },
      {
        href: '/reading',
        label: 'Чтение',
        icon: 'book',
      },
    ],
    changeTheme: 'Сменить тему',
    changeLocale: 'Поменять язык',
  },
  main: {
    hero: 'Этот сайт предназначен для изучения армянского алфавита. Можно выбрать обучение карточками, а можно в любом русском тексте заменить буквы на армянские, чтобы практиковать чтение.',
    alphabet: 'Алфавит',
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
      good: 'Поздравляю! Теперь можно сказать, что вы выучили алфавит!',
    },
    next: 'Дальше',
    show_mistakes: 'Показать ошибки',
    breadcrumbs: [
      { title: 'Главная', href: '/' },
      { title: 'Тест', href: '/test' },
    ],
    alphabet: 'Алфавит',
  },
  read: {
    hero: 'В этом разделе можно улучшить свои навыки чтения путем замены кириллицы на аналогичные буквы армянского алфавита. Это не переводчик, поскольку рассчитан на тех, кто не знает армянский язык, поэтому ради упрощения чтения используются обычные слова русского языка, который пользователю известен.',
    textarea_placeholder: 'Вставьте текст сюда',
    textarea_title: 'Русский текст',
    breadcrumbs: [
      { title: 'Главная', href: '/' },
      { title: 'Чтение', href: '/reading' },
    ],
    alphabet: 'Алфавит',
  },
  cards: {
    alphabet: 'Алфавит',
    next: 'Дальше',
    show: 'Показать',
    breadcrumbs: [
      { title: 'Главная', href: '/' },
      { title: 'Карточки', href: '/cards' },
    ],
    secondary_char: '(англ: %char%)',
  },
};



export default mockdataRu;
