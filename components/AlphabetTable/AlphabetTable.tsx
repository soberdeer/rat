import { useEffect, useMemo, useState } from 'react';
import {
  DefaultProps,
  Center,
  Text,
  Stack,
  Collapse,
  Button,
  Container,
  useMantineColorScheme,
} from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import chunkGenerator from './chunkGenerator';
import useStyles from './AlphabetTable.styles';

export function AlphabetTable({
  className,
  ...others
}: DefaultProps) {
  const { classes, cx } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { ref, width } = useElementSize();
  const [opened, setOpened] = useState<boolean>(false);
  const chunks = useMemo(() => (chunkGenerator(width < 700 ? (width < 520 ? 19 : 15) : 10) || []), [width]);

  return (
    <Container className={cx(classes.root, className)} {...others} ref={ref}>
      <Center>
        <Button
          color={colorScheme === 'dark' ? 'gray' : 'orange'}
          variant={colorScheme === 'dark' ? 'filled' : 'light'}
          onClick={() => setOpened((o) => !o)}
        >
          Алфавит
        </Button>
      </Center>

      <Collapse in={opened} py={40} ref={ref}>
        <Center>
          <div className={classes.grid}>
            {chunks.map((chunk, index) => (
              <Stack spacing={0} key={index}>
                {chunk
                  .map((char, j) => (
                    <div key={j}>
                      <Center className={classes.boxWrapper}>
                        <div className={classes.box}>
                          <Text
                            className={classes.char}
                            style={{ textTransform: char.option ? 'none' : 'capitalize' }}
                          >
                            {`${char.option || char.cyrillic}`}
                          </Text>
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
          </div>
        </Center>
      </Collapse>
    </Container>
  );
}
