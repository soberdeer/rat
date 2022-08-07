import {
  DefaultProps,
  Breadcrumbs,
  Anchor,
  Group,
  Text,
  Container,
  Button,
  Stack,
  Title,
  SimpleGrid,
  Stepper,
} from '@mantine/core';
import chars from '../../util/charMap';
import { useEffect, useMemo, useState } from 'react';
import Box from '../Box/Box';
import useStyles from './CardsPage.styles';

const breadcrumbs = [
  { title: 'Главная', href: '/' },
  { title: 'Карточки', href: '/cards' },
];

interface CardsPageProps extends DefaultProps {
}

function shuffleArray() {
  const array = [...chars];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.filter(chars => chars.armenian.length === 1) as typeof chars;
}

export function CardsPage({
  ...others
}: CardsPageProps) {
  const { classes, cx } = useStyles();
  const [charArr, setCharArr] = useState<typeof chars>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setCharArr(shuffleArray);
  }, []);

  return (
    <Container {...others}>
      <Breadcrumbs py={40}>{
        breadcrumbs.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>
      <Stack spacing={40}>
        <Stepper active={currentIndex} classNames={{
          stepBody: classes.stepBody,
          stepIcon: classes.stepIcon,
          separator: classes.separator,
          stepCompletedIcon: classes.stepCompletedIcon,
        }}>
          {charArr.map((_, index) => (
            <Stepper.Step />
          ))}
        </Stepper>

        {charArr.length > 0 && (
          <Stack className={classes.screen} spacing={40}>
            <Group className={classes.boxes}>
              <Box className={classes.box}>
                <Group className={classes.cardGroup}>
                  <Text
                    className={classes.cardText}
                  >{`${charArr[currentIndex]?.armenian.toUpperCase()} ${charArr[currentIndex]?.armenian}`}</Text>
                </Group>
              </Box>
              <Box className={classes.box}>
                <Group className={cx(classes.cardGroup, classes.rightCard)}>
                  <Text className={classes.ruLetter}>{
                    showAnswer ? charArr[currentIndex]?.cyrillic : '?'
                  }</Text>
                  {showAnswer && charArr[currentIndex]?.latin && (
                    <Text>{`(англ: ${charArr[currentIndex]?.latin})`}</Text>
                  )}
                  <Button
                    className={classes.next}
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
                </Group>
              </Box>
            </Group>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
