import images from '../components/MainPage/images';

const mockdata = {
  navigation: {
    links: [
      {
        href: '/cards',
        label: 'Карточки',
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
        image: 'reading'  as keyof typeof images,
        title: 'Чтение',
        link: '/reading',
      },
    ],
  },
};

export default mockdata;
