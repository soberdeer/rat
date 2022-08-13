import {
  DefaultProps,
  Group,
  Text,
  Container,
  Stack,
  Stepper,
} from '@mantine/core';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Box from '../Box/Box';
import { AlphabetTable } from '../AlphabetTable/AlphabetTable';
import { CharType } from '../../util/charType';
import useStyles from './CardsWrapper.styles';

interface CardsWrapperInterface extends DefaultProps {
  breadcrumbs: { title: string, href: string }[],
  charsArray: CharType[],
  withAnswerColors?: boolean,
  withCyrillic?: boolean,
  currentIndex: number,
  showAnswer?: boolean,
  children?: React.ReactNode | React.ReactNode[]
  stepperColors?: ('blue' | 'green' | 'red')[],
}

export default function CardsWrapper({
  breadcrumbs,
  charsArray,
  withAnswerColors,
  withCyrillic,
  currentIndex,
  children,
  showAnswer,
  stepperColors,
  ...others
}: CardsWrapperInterface) {
  const { classes, cx } = useStyles();

  return (
    <Container {...others}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Stack spacing={40}>
        <Stepper
          active={currentIndex}
          classNames={{
            stepBody: classes.stepBody,
            stepIcon: classes.stepIcon,
            separator: classes.separator,
            stepCompletedIcon: classes.stepCompletedIcon,
          }}
        >
          {charsArray.map((_, index) => (
            <Stepper.Step
              key={index}
              color={stepperColors ? stepperColors[index] || 'blue' : 'blue'}
            />
          ))}
        </Stepper>

        {charsArray.length > 0 && (
          <Stack className={classes.screen} spacing={40}>
            <Group className={classes.boxes}>
              <Box className={classes.box}>
                <Group className={classes.cardGroup}>
                  <Text className={classes.cardText}>
                    {`${charsArray[currentIndex]?.armenian.toUpperCase()} ${charsArray[currentIndex]?.armenian}`}
                  </Text>
                </Group>
              </Box>
              {withCyrillic && (
                <Box className={classes.box}>
                  <Group className={cx(classes.cardGroup, classes.rightCard)}>
                    <Text className={classes.ruLetter}>{
                      showAnswer ? charsArray[currentIndex]?.cyrillic : '?'
                    }</Text>
                    {showAnswer && charsArray[currentIndex]?.latin && (
                      <Text>{`(англ: ${charsArray[currentIndex]?.latin})`}</Text>
                    )}
                  </Group>
                </Box>
              )}
            </Group>
            {children}
          </Stack>
        )}
        <AlphabetTable pb={40} />
      </Stack>
    </Container>
  );
}
