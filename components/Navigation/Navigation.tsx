import {
  DefaultProps,
  ActionIcon,
  Group,
  Container,
  Button,
  useMantineColorScheme,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { Sun, Moon } from 'react-feather';
import Link from 'next/link';
import Logo from './Logo';
import useStyles from './Navigation.styles';

interface NavigationProps extends DefaultProps {
  links: { href: string, label: string }[],
  changeTheme: string,
}

export function Navigation({
  links,
  changeTheme,
}: NavigationProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container} py="xs">
        <Group spacing="xl" align="center">
          <Link href="/" passHref>
            <UnstyledButton component="a">
              <Group spacing="xs" align="center">
                <div className={classes.logo}><Logo /></div>
                <Title order={3} className={classes.title}>RATranscription</Title>
              </Group>
            </UnstyledButton>
          </Link>
          <Group spacing="md" align="center">
            {links.map((link, index) => (
              <Link href={link.href} as={`${process.env.BACKEND_URL}${link.href}`} passHref key={index}>
                <Button
                  component="a"
                  color={colorScheme === 'dark' ? 'gray' : 'orange'}
                  variant="light"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Group>
        </Group>
        <ActionIcon
          variant="outline"
          color={colorScheme === 'dark' ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title={changeTheme}
        >
          {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </ActionIcon>
      </Container>
    </div>
  );
}
