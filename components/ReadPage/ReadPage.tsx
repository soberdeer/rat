import {
  DefaultProps,
  Text,
  Container,
  Stack,
  Tooltip,
  Textarea,
  Space,
} from '@mantine/core';
import { useState } from 'react';
import Box from '../Box/Box';
import Breadcrumbs, { Breadcrumb } from '../Breadcrumbs/Breadcrumbs';
import replaceText, { ResultType } from '../../util/replaceText';
import useStyles from './ReadPage.styles';
import { AlphabetTable } from '../AlphabetTable/AlphabetTable';

interface ReadPageProps extends DefaultProps {
  hero: string,
  textarea_placeholder: string,
  textarea_title: string,
  breadcrumbs: Breadcrumb[],
  alphabet: string,
}


export function ReadPage({
  hero,
  textarea_placeholder,
  textarea_title,
  breadcrumbs,
  alphabet,
  ...others
}: ReadPageProps) {
  const { classes } = useStyles();
  const [text, setText] = useState<string>('');
  const [arrText, setArrText] = useState<string[]>([]);
  const [changedText, setChangedText] = useState<ResultType[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setArrText(e.target.value.split(/\s+/));
    setChangedText(e.target.value.trim().length === 0 ? [] : replaceText(e.target.value));
  };

  return (
    <Container
      sx={() => ({
        paddingBottom: 40,
      })}
      {...others}
    >
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Text align="center" pb={40}>{hero}</Text>
      <AlphabetTable label={alphabet} />
      <Stack spacing={40} py={40}>
        <Box>
          <Textarea
            placeholder={textarea_placeholder}
            label={textarea_title}
            value={text}
            onChange={changeText}
            autosize
            minRows={4}
            maxRows={10}
          />
        </Box>
        {text.length > 0 && (
          <Box>
            <Box className={classes.translatedBox}>
              {changedText.map((item, index) => (
                item.paragraph.length === 0 ? (
                  <Space h="md" />
                ) : (
                  <Text
                    align="left"
                    key={index}
                  >
                    {item.array.map((word, j) => (
                      <Tooltip
                        label={arrText[item.startIndex + j]?.replaceAll('[\\W_]', '')}
                        key={j}
                        withArrow={true}
                      >
                        <span>
                          <span className={classes.span}>{word}</span>
                          <span> </span>
                        </span>
                      </Tooltip>
                    ))}
                  </Text>
                )),
              )}
            </Box>
          </Box>
        )}
      </Stack>
    </Container>
  );
}
