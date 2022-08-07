import {
  DefaultProps,
  Breadcrumbs,
  Anchor,
  Text,
  Container,
  Stack,
  Tooltip,
  Textarea,
  Space,
} from '@mantine/core';
import { useState } from 'react';
import Box from '../Box/Box';
import replaceText, { ResultType } from '../../util/replaceText';
import useStyles from './ReadPage.styles';

const breadcrumbs = [
  { title: 'Главная', href: '/' },
  { title: 'Чтение', href: '/reading' },
];

interface ReadPageProps extends DefaultProps {
}


export function ReadPage({
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
      <Breadcrumbs py={40}>{
        breadcrumbs.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>
      <Stack spacing={40}>
        <Box>
          <Textarea
            placeholder="Вставьте текст сюда"
            label="Русский текст"
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
