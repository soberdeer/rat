import {
  Button,
  Center,
  DefaultProps,
  Radio,
} from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import shuffleArray from '../../util/shuffleChars';
import CardsWrapper from '../CardsWrapper/CardsWrapper';
import getAnswers from './getAnswers';
import { CharType } from '../../util/charType';
import Result, { ResultsType } from './Result/Result';
import { Breadcrumb } from '../Breadcrumbs/Breadcrumbs';
import mockdata from '../../mockdata';

interface TestPageProps extends DefaultProps {
  results: ResultsType,
  next: string,
  show_mistakes: string,
  breadcrumbs: Breadcrumb[],
  alphabet: string,
  locale: keyof typeof mockdata;
}

export default function TestPage({
  results,
  next,
  show_mistakes,
  breadcrumbs,
  alphabet,
  locale,
  ...others
}: TestPageProps) {
  const charArr = useMemo<CharType[]>(() => shuffleArray(), []);
  const variants = useMemo<CharType[][]>(() => charArr.map(char => getAnswers(char)), []);
  const [answers, setAnswers] = useState<(boolean | null)[]>(charArr.map(_ => null));
  const [answeredValues, setAnsweredValues] = useState<(CharType | null)[]>(charArr.map(_ => null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function updateAnswers(value: string) {
    const clone = [...answers];
    clone[currentIndex] = value === ((charArr[currentIndex]?.option) || charArr[currentIndex].cyrillic);
    const answeredClone = [...answeredValues];
    answeredClone[currentIndex] = variants[currentIndex]
      .find(item => item.option ? value === item.option : value === item.cyrillic) as CharType;
    setAnsweredValues(answeredClone);
    setAnswers(clone);
  }

  useEffect(() => {
    return () => {
      setAnswers(charArr.map(_ => null));
      setAnsweredValues(charArr.map(_ => null));
      setCurrentIndex(0)
    }
  }, [])

  return showResult ? (
    <Result
      answers={answers}
      breadcrumbs={breadcrumbs}
      charArr={charArr}
      resultsLabels={results}
      showMistakesLabel={show_mistakes}
      variants={variants}
      answeredValues={answeredValues}
    />
  ) : (
    <CardsWrapper
      breadcrumbs={breadcrumbs}
      charsArray={charArr}
      currentIndex={currentIndex}
      alphabet={alphabet}
      {...others}
    >
      <Radio.Group
        value={answeredValues[currentIndex]?.option || answeredValues[currentIndex]?.cyrillic || ''}
        onChange={(value) => updateAnswers(value)}
      >
        {variants[currentIndex].map((answer, index) => (
          <Radio
            sx={() => ({
              textTransform: answer.option ? 'none' : 'capitalize',
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
          {next}
        </Button>
      </Center>
    </CardsWrapper>
  );
}
