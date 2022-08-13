import { MainPage } from '../components/MainPage/MainPage';
import mockdata from '../mockdata';

const Home = ({ locale }: { locale: keyof typeof mockdata}) => {
  return <MainPage {...mockdata[locale || 'ru'].main}/>;
};

export default Home;
