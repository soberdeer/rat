import { DefaultProps, ActionIcon, Group, Container, Button, useMantineColorScheme } from '@mantine/core';
import useStyles from './Navigation.styles';
import {Sun, Moon} from 'react-feather';
import Link from 'next/link';
import Logo from './Logo';

interface MainPageProps extends DefaultProps {
}

export function Navigation({}: MainPageProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container} py="xs">
        <Group spacing="xl" align="center">
          <div className={classes.logo}><Logo /></div>
          <Group spacing="md" align="center">
            <Link href="/cards" passHref>
              <Button component="a" color={colorScheme === 'dark' ? 'gray' : 'orange'}>Карточки</Button>
            </Link>
            <Link href="/translator" passHref>
              <Button component="a" color={colorScheme === 'dark' ? 'gray' : 'orange'}>Чтение</Button>
            </Link>
          </Group>
        </Group>
        <ActionIcon
          variant="outline"
          color={colorScheme === 'dark' ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </ActionIcon>
      </Container>
    </div>
  );
}
