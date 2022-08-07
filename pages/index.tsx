import type { NextPage } from 'next';
import { MainPage } from '../components/MainPage/MainPage';
import mockdata from '../mockdata/mockdata';

const Home: NextPage = () => {
  return <MainPage {...mockdata.main}/>;
};

export default Home;
