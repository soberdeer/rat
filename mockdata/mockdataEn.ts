import images from '../components/MainPage/images';

const mockdataEn = {
  navigation: {
    links: [
      {
        href: '/cards',
        label: 'Cards',
      },
      {
        href: '/test',
        label: 'Test',
      },
      {
        href: '/reading',
        label: 'Reading',
      },
    ],
    changeTheme: 'Change theme',
    changeLocale: 'Change language',
  },
  main: {
    hero: 'This site is for learning the Armenian alphabet. You can choose to learn with flashcards, or you can replace letters with Armenian in any English text in order to practice reading.',
    alphabet: 'Alphabet',
    cards: [
      {
        image: 'cards' as keyof typeof images,
        title: 'Cards',
        link: '/cards',
      },
      {
        image: 'test' as keyof typeof images,
        title: 'Test',
        link: '/test',
      },
      {
        image: 'reading' as keyof typeof images,
        title: 'Reading',
        link: '/reading',
      },
    ],
  },
  test: {
    results: {
      bad: 'Unfortunately, your knowledge of the alphabet leaves much to be desired. Practice more and you will definitely memorize it',
      neutral: 'Not a bad result! But there are still some mistakes - it\'s worth repeating the alphabet a few more times',
      good: 'Congratulations! Now we can say that you have learned the alphabet!',
    },
    next: 'Next',
    show_mistakes: 'Show mistakes',
    breadcrumbs: [
      { title: 'Main', href: '/' },
      { title: 'Test', href: '/test' },
    ],
    alphabet: 'Alphabet',
  },
  read: {
    hero: 'In this section, you can improve your reading skills by replacing the latin alphabet with similar letters of the Armenian alphabet. This is not a translator, because it is designed for those who do not know the Armenian language, therefore, for the sake of simplicity, ordinary words of the English, which the user knows, are used.',
    textarea_placeholder: 'Paste text here',
    textarea_title: 'English text',
    breadcrumbs: [
      { title: 'Main', href: '/' },
      { title: 'Reading', href: '/reading' },
    ],
    alphabet: 'Alphabet',
  },
  cards: {
    alphabet: 'Alphabet',
    next: 'Next',
    show: 'Show',
    breadcrumbs: [
      { title: 'Main', href: '/' },
      { title: 'Cards', href: '/cards' },
    ],
    secondary_char: '(eng: %char%)',
  },
};



export default mockdataEn;
