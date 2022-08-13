import dynamic from 'next/dynamic';
import mockdata from '../mockdata';

const CardsPage = dynamic(() => import('../components/CardsPage/CardsPage'), { ssr: false });

const Cards = ({ locale }: { locale: keyof typeof mockdata}) => {
  return <CardsPage locale={locale} {...mockdata[locale || 'ru'].cards}/>;
};

export default Cards;
