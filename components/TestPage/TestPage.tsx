import {
  Button,
  Center,
  DefaultProps,
  Radio,
} from '@mantine/core';
import { useMemo, useState } from 'react';
import shuffleArray from '../../util/shuffleChars';
import CardsWrapper from '../CardsWrapper/CardsWrapper';
import getAnswers from './getAnswers';
import { CharType } from '../../util/charType';
import Result from './Result/Result';

const breadcrumbs = [
  { title: 'Главная', href: '/' },
  { title: 'Тест', href: '/test' },
];

export default function TestPage({
  labels,
  ...others
}: DefaultProps & { labels: Record<string, any> }) {
  const charArr = useMemo(() => shuffleArray(), []);
  const variants = useMemo<CharType[][]>(() => charArr.map(char => getAnswers(char)), []);
  const [answers, setAnswers] = useState<(boolean | null)[]>(charArr.map(_ => null));
  const [answeredValues, setAnsweredValues] = useState<CharType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function updateAnswers(value: string) {
    const clone = [...answers];
    clone[currentIndex] = value === (charArr[currentIndex].option || charArr[currentIndex].cyrillic);
    setAnsweredValues([...answeredValues,
      variants[currentIndex]
        .find(item => item.option ? value === item.option : value === item.cyrillic) as CharType,
    ]);
    setAnswers(clone);
  }

  return showResult ? (
    <Result
      answers={answers}
      breadcrumbs={breadcrumbs}
      charArr={charArr}
      labels={labels}
      variants={variants}
      answeredValues={answeredValues}
    />
  ) : (
    <CardsWrapper
      breadcrumbs={breadcrumbs}
      charsArray={charArr}
      currentIndex={currentIndex}
      {...others}
    >
      <Radio.Group onChange={(value) => updateAnswers(value)}>
        {variants[currentIndex].map((answer, index) => (
          <Radio
            sx={() => ({
              textTransform: 'capitalize',
            })}
            key={index}
            value={answer.option || answer.cyrillic}
            label={answer.option || answer.cyrillic}
          />
        ))}
      </Radio.Group>
      <Center>
        <Button
          sx={() => ({ width: '100%' })}
          color="green"
          onClick={() => (
            currentIndex === charArr.length - 1 ?
              setShowResult(true) :
              setCurrentIndex(currentIndex + 1)
          )}
          disabled={!answeredValues[currentIndex]}
        >
          Дальше
        </Button>
      </Center>
    </CardsWrapper>
  );
}
