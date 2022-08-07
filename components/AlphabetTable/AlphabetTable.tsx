import {
  DefaultProps,
  SimpleGrid,
  Center,
  Text,
  Stack,
  Title,
} from '@mantine/core';
import { useElementSize, useViewportSize } from '@mantine/hooks';
import chars from '../../util/charMap';
import useStyles from './AlphabetTable.styles';
import { useEffect, useState } from 'react';
import charMap from '../../util/charMap';

function chunkGenerator(arr: typeof charMap, n: number) {
  let newChunk = [];
  for (let i = 0; i < arr.length; i += n) {
    newChunk.push(arr.slice(i, i + n));
  }
  return newChunk;
}

interface AlphabetTableProps extends DefaultProps {
}

export function AlphabetTable({
  ...others
}: AlphabetTableProps) {
  const { classes, cx } = useStyles();
  const { ref, width, height } = useElementSize();
  const [chunks, setChunks] = useState<typeof charMap[]>([]);

  useEffect(() => {
    const chunk = width < 700 ? (width < 520 ? 20 : 15) : 10;
    setChunks(
      chunkGenerator(
        charMap
          .filter(char => char.armenian.length === 1)
          .sort((char, char2) => char.cyrillic > char2.cyrillic ? 1 : -1),
        chunk));
  }, [width]);


  return (
    <Stack ref={ref} py={40}>
      <Title align="center">Алфавит</Title>
      <Center >
        <div className={classes.grid}>
          {chunks.map((chunk, index) => (
            <Stack spacing={0} key={index}>
              {chunk
                .map((char, j) => (
                  <div key={j}>
                    <Center className={classes.boxWrapper}>
                      <div className={classes.box}>
                        <Text
                          className={classes.char} style={{ textTransform: char.option ? 'none' : 'capitalize' }}
                        >{`${char.option ? '(В)о' : char.cyrillic}`}</Text>
                      </div>
                      <div className={classes.box}>
                        <Text className={classes.char}>{char.armenian.toUpperCase()}</Text>
                      </div>
                      <div className={classes.box}>
                        <Text className={classes.char}>{char.armenian}</Text>
                      </div>
                    </Center>
                  </div>
                ))}
            </Stack>
          ))}
          {/*{chars*/}
          {/*  .filter(char => char.armenian.length === 1)*/}
          {/*  .sort((char, char2) => char.cyrillic > char2.cyrillic ? 1 : -1)*/}
          {/*  .map((char, index) => (*/}
          {/*    <div key={index}>*/}
          {/*      <Center className={classes.boxWrapper}>*/}
          {/*        <div className={classes.box}>*/}
          {/*          <Text*/}
          {/*            className={classes.char} style={{ textTransform: 'capitalize' }}*/}
          {/*          >{`${char.cyrillic}${char.option ? ` (${char.option})` : ''}`}</Text>*/}
          {/*        </div>*/}
          {/*        <div className={classes.box}>*/}
          {/*          <Text className={classes.char}>{char.armenian.toUpperCase()}</Text>*/}
          {/*        </div>*/}
          {/*        <div className={classes.box}>*/}
          {/*          <Text className={classes.char}>{char.armenian}</Text>*/}
          {/*        </div>*/}
          {/*      </Center>*/}
          {/*    </div>*/}
          {/*  ))}*/}
        </div>
      </Center>
    </Stack>
  );
}
