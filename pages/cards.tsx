import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const CardsPage = dynamic(() => import('../components/CardsPage/CardsPage'), { ssr: false });

const Cards: NextPage = () => {
  return <CardsPage />;
};

export default Cards;
