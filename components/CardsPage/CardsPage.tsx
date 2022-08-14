import {
  Button,
  Center,
  DefaultProps,
} from '@mantine/core';
import { useMemo, useState } from 'react';
import shuffleArray from '../../util/shuffleChars';
import CardsWrapper from '../CardsWrapper/CardsWrapper';
import { Breadcrumb } from '../Breadcrumbs/Breadcrumbs';
import LocaleContext from '../LocaleContext';

interface CardsPageProps extends DefaultProps {
  breadcrumbs: Breadcrumb[],
  alphabet: string,
  next: string,
  show: string,
}

export default function CardsPage({
  breadcrumbs,
  alphabet,
  next,
  show,
  ...others
}: CardsPageProps) {
  const charArr = useMemo(() => shuffleArray(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <CardsWrapper
      breadcrumbs={breadcrumbs}
      charsArray={charArr}
      showAnswer={showAnswer}
      currentIndex={currentIndex}
      withCyrillic
      alphabet={alphabet}
      {...others}
    >
      <Center>
        <Button
          sx={() => ({ width: '100%' })}
          color={showAnswer ? 'green' : 'blue'}
          onClick={() => {
            if (showAnswer) {
              setCurrentIndex(currentIndex === charArr.length - 1 ? 0 : currentIndex + 1);
            }
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? next : show}
        </Button>
      </Center>
    </CardsWrapper>
  );
}
