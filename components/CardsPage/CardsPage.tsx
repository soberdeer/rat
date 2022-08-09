import {
  Button, Center,
  DefaultProps,
} from '@mantine/core';
import { useMemo, useState } from 'react';
import shuffleArray from '../../util/shuffleChars';
import CardsWrapper from '../CardsWrapper/CardsWrapper';

const breadcrumbs = [
  { title: 'Главная', href: '/' },
  { title: 'Карточки', href: '/cards' },
];

export default function CardsPage({
  ...others
}: DefaultProps) {
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
          {showAnswer ? 'Дальше' : 'Показать'}
        </Button>
      </Center>
    </CardsWrapper>
  );
}
