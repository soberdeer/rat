import { useMemo, useState } from 'react';
import {
  Anchor,
  Breadcrumbs,
  Button,
  Center, Container,
  DefaultProps,
  Text,
  RingProgress,
  Stack,
  Collapse,
  Radio,
} from '@mantine/core';
import { CharType } from '../../../util/charType';
import Box from '../../Box/Box';

interface ResultProps extends DefaultProps {
  breadcrumbs: { title: string, href: string }[],
  answers: (boolean | null)[],
  charArr: CharType[],
  labels: Record<string, any>,
  variants: CharType[][],
  answeredValues: CharType[],
}


export default function Result({
  breadcrumbs,
  answers, // bool answers
  labels,
  variants, // radio chars
  charArr, // initial chars
  answeredValues, //radio value
  ...others
}: ResultProps) {
  const trueValues = useMemo(() => Math.floor(answers.filter(item => item).length / (answers.length / 100)), []);
  const color = useMemo(() => (trueValues > 90 ? 'green' : trueValues > 60 ? 'yellow' : 'red'), [trueValues]);
  const [showMistakes, setShowMistakes] = useState(false);
  const radioItems = useMemo(() => answers
    .map((item, index) => ({ item, index }))
    .filter(item => item.item)
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
            {trueValues > 90 ? labels.results.good : trueValues > 60 ? labels.results.neutral : labels.results.bad}
          </Text>
        </Container>
        <Center>
          <Button
            onClick={() => setShowMistakes(o => !o)}
          >
            {labels.show_mistakes}
          </Button>
        </Center>

        <Collapse in={showMistakes} py={40}>
          <Stack>
            {radioItems.map((item, index) => (
              <Center key={index}>
                <Box>
                  <Text>
                    {}
                  </Text>
                </Box>
                <Radio.Group value={item.correct.option || item.correct.cyrillic}>
                  {item.variants.map((variant, j) => (
                    //TODO: add wrong answer
                    <Radio
                      sx={() => ({ textTransform: 'capitalize' })}
                      value={variant.option || variant.cyrillic}
                      label={variant.option || variant.cyrillic}
                    />
                  ))}
                </Radio.Group>
              </Center>
            ))}
          </Stack>
        </Collapse>
      </Stack>
    </Container>
  );
}
