import {
  Button,
  Center,
  DefaultProps,
  Radio,
} from '@mantine/core';
import { useContext, useEffect, useMemo, useState } from 'react';
import shuffleArray from '../../util/shuffleChars';
import CardsWrapper from '../CardsWrapper/CardsWrapper';
import getAnswers from './getAnswers';
import LocaleContext from '../LocaleContext';
import { CharType } from '../../util/charType';
import Result, { ResultsType } from './Result/Result';
import { Breadcrumb } from '../Breadcrumbs/Breadcrumbs';

interface TestPageProps extends DefaultProps {
  results: ResultsType,
  next: string,
  show_mistakes: string,
  breadcrumbs: Breadcrumb[],
  alphabet: string,
}

export default function TestPage({
  results,
  next,
  show_mistakes,
  breadcrumbs,
  alphabet,
  ...others
}: TestPageProps) {
  const charArr = useMemo<CharType[]>(() => shuffleArray(), []);
  const { locale } = useContext(LocaleContext);
  const mainKey = useMemo<keyof CharType>(() => locale === 'ru' ? 'cyrillic' : 'latin', [locale])
  const secondaryKey = useMemo<keyof CharType>(() => locale === 'ru' ? 'option' : 'latin_option', [locale])
  const variants = useMemo<CharType[][]>(() => charArr.map(char => getAnswers(char)), []);
  const [answers, setAnswers] = useState<(boolean | null)[]>(charArr.map(_ => null));
  const [answeredValues, setAnsweredValues] = useState<(CharType | null)[]>(charArr.map(_ => null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // console.log(locale);

  function updateAnswers(value: string) {
    const clone = [...answers];
    clone[currentIndex] = value === ((charArr[currentIndex]?.[secondaryKey]) || charArr[currentIndex][mainKey]);
    const answeredClone = [...answeredValues];
    answeredClone[currentIndex] = variants[currentIndex]
      .find(item => item[secondaryKey] ? value === item[secondaryKey] : value === item[mainKey]) as CharType;
    setAnsweredValues(answeredClone);
    setAnswers(clone);
  }

  const cleanValues = () => {
    setAnswers(charArr.map(_ => null));
    setAnsweredValues(charArr.map(_ => null));
    setCurrentIndex(0);
  }

  useEffect(() => {
    return () => {
      cleanValues();
    };
  }, []);

  useEffect(() => {
    cleanValues();
  }, [locale])

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
        value={answeredValues[currentIndex]?.[secondaryKey] || answeredValues[currentIndex]?.[mainKey] || ''}
        onChange={(value) => updateAnswers(value)}
      >
        {variants[currentIndex].map((answer, index) => (
          <Radio
            sx={() => ({
              textTransform: answer[secondaryKey] ? 'none' : 'capitalize',
            })}
            key={index}
            value={answer[secondaryKey] || answer[mainKey] || ''}
            label={answer[secondaryKey] || answer[mainKey]}
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
