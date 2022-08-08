import {
  DefaultProps,
  Breadcrumbs,
  Anchor,
  Group,
  Text,
  Container,
  Button,
  Stack,
  Stepper,
  Center,
} from '@mantine/core';
import { useMemo, useState } from 'react';
import Box from '../Box/Box';
import { AlphabetTable } from '../AlphabetTable/AlphabetTable';
import shuffleArray from './shuffleArray';
import useStyles from './CardsPage.styles';

const breadcrumbs = [
  { title: 'Главная', href: '/' },
  { title: 'Карточки', href: '/cards' },
];

export default function CardsPage({
  ...others
}: DefaultProps) {
  const { classes, cx } = useStyles();
  const charArr = useMemo(() => shuffleArray(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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
        <Stepper
          active={currentIndex} classNames={{
          stepBody: classes.stepBody,
          stepIcon: classes.stepIcon,
          separator: classes.separator,
          stepCompletedIcon: classes.stepCompletedIcon,
        }}
        >
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
                </Group>
              </Box>
            </Group>
            <Center>
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
            </Center>
          </Stack>
        )}
        <AlphabetTable pb={40} />
      </Stack>
    </Container>
  );
}
