import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import labels from '../mockdata/mockdata';

const TestPage = dynamic(() => import('../components/TestPage/TestPage'), { ssr: false });

const Test: NextPage = () => {
  return <TestPage labels={labels.test} />;
};

export default Test;
