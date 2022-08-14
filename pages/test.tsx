import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import mockdata from '../mockdata';

const TestPage = dynamic(() => import('../components/TestPage/TestPage'), { ssr: false });

const Test = ({ locale = 'ru'}: { locale: keyof typeof mockdata}) => {
  return <TestPage {...mockdata[locale].test} />;
};

export default Test;
