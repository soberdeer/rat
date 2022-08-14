import { useContext, useMemo, useState } from 'react';
import {
  Anchor,
  Breadcrumbs,
  Button,
  Center,
  Container,
  DefaultProps,
  Text,
  RingProgress,
  Stack,
  Collapse,
  Radio,
  Group,
} from '@mantine/core';
import { CharType } from '../../../util/charType';
import Box from '../../Box/Box';
import LocaleContext from '../../LocaleContext';

export type ResultsType = {
  bad: string,
  neutral: string,
  good: string,
};

interface ResultProps extends DefaultProps {
  breadcrumbs: { title: string, href: string }[],
  answers: (boolean | null)[],
  charArr: CharType[],
  variants: CharType[][],
  answeredValues: (CharType | null)[],
  resultsLabels: ResultsType,
  showMistakesLabel: string,
}


export default function Result({
  breadcrumbs,
  showMistakesLabel,
  resultsLabels,
  answers, // bool answers
  variants, // radio chars
  charArr, // initial chars
  answeredValues, //radio value
  ...others
}: ResultProps) {
  const { locale } = useContext(LocaleContext);
  const mainKey = useMemo<keyof CharType>(() => locale === 'ru' ? 'cyrillic' : 'latin', [locale])
  const secondaryKey = useMemo<keyof CharType>(() => locale === 'ru' ? 'option' : 'latin_option', [locale])
  const trueValues = useMemo<number>(() => (
    Math.floor(answers.filter(item => item).length / (answers.length / 100))
  ), []);
  const color = useMemo<string>(() => (
    trueValues > 90 ? 'green' : trueValues > 60 ? 'yellow' : 'red'
  ), [trueValues]);
  const [showMistakes, setShowMistakes] = useState(false);
  const radioItems = useMemo(() => answers
    .map((item, index) => ({ item, index }))
    .filter(item => !item.item)
    .map(item => ({
      variants: variants[item.index],
      answered: answeredValues[item.index],
      correct: charArr[item.index],
    })), []);

  return (
    <Container {...others}>
      <Breadcrumbs py={40}>{
        breadcrumbs.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>
      <Stack>
        <Center>
          <RingProgress
            size={300}
            thickness={30}
            label={
              <Text
                color={color}
                weight={700}
                align="center"
                size={50}
              >
                {`${trueValues}%`}
              </Text>
            }
            sections={[
              { value: trueValues, color },
            ]}
          />
        </Center>
        <Container size="sm">
          <Text align="center">
            {trueValues > 90 ?
              resultsLabels.good :
              trueValues > 60 ? resultsLabels.neutral : resultsLabels.bad}
          </Text>
        </Container>
        {trueValues !== 100 && (
          <Center>
            <Button
              onClick={() => setShowMistakes(o => !o)}
            >
              {showMistakesLabel}
            </Button>
          </Center>
        )}

        <Collapse in={showMistakes} py={40}>
          <Center>
            <Stack>
              {radioItems.map((item, index) => (
                item.correct ? (
                  <Group key={index}>
                    <Box style={{ padding: '10px 0', width: 60 }}>
                      <Text sx={() => ({ fontSize: 20 })}>
                        {item.correct.armenian.toUpperCase()}
                        {item.correct.armenian}
                      </Text>
                    </Box>
                    <Group spacing={20}>
                      {item.variants.map((variant, j) => {
                        const wrong = (
                          (variant[secondaryKey] || variant[mainKey]) === (item.answered?.[secondaryKey] || item.answered?.[mainKey])
                        );
                        const correct = (
                          (variant[secondaryKey] || variant[mainKey]) === (item.correct[secondaryKey] || item.correct[mainKey])
                        );
                        return (
                          <Radio
                            key={j}
                            color={wrong ? 'red' : 'green'}
                            checked={wrong || correct}
                            sx={() => ({
                              textTransform: variant[secondaryKey] ? 'none' : 'capitalize',
                              minWidth: 60,
                              opacity: !correct ? 0.5 : 1,
                            })}
                            value={variant[secondaryKey] || variant[mainKey] || ''}
                            label={variant[secondaryKey] || variant[mainKey]}
                          />
                        );
                      })}
                    </Group>
                  </Group>
                ) : null
              ))}
            </Stack>
          </Center>
        </Collapse>
      </Stack>
    </Container>
  );
}
