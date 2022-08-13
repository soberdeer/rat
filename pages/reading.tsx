import { ReadPage } from '../components/ReadPage/ReadPage';
import mockdata from '../mockdata';

const Reading = ({ locale }: { locale: keyof typeof mockdata}) => {
  return <ReadPage {...mockdata[locale || 'ru'].read}/>;
};

export default Reading;
