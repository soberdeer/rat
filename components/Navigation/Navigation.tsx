import {
  DefaultProps,
  ActionIcon,
  Group,
  Container,
  Button,
  useMantineColorScheme,
  Title,
  Menu,
  UnstyledButton,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { Sun, Moon } from 'react-feather';
import Link from 'next/link';
import Logo from './Logo';
import GithubIcon from './GithubIcon';
import mockdata from '../../mockdata';
import useStyles from './Navigation.styles';
import { useRouter } from 'next/router';

interface NavigationProps extends DefaultProps {
  links: { href: string, label: string }[],
  changeTheme: string,
  changeLocale: string,
  locale: keyof typeof mockdata,
  locales?: (keyof typeof mockdata)[],
}

export function Navigation({
  links,
  changeTheme,
  changeLocale,
  locale,
  locales,
}: NavigationProps) {
  const router = useRouter()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const toggleLocale = (e: any) => {
    const { pathname, asPath, query } = router;
    document.cookie = `NEXT_LOCALE=${e.target.textContent}`
    router.push({pathname, query}, asPath, { locale: e.target.textContent })
  }

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container} py="xs">
        <Group spacing="xl" align="center">
          <UnstyledButton component={NextLink} href="/">
            <Group spacing="xs" align="center">
              <div className={classes.logo}><Logo /></div>
              <Title order={3} className={classes.title}>RAT</Title>
            </Group>
          </UnstyledButton>
          <Group spacing="md" align="center">
            {links.map((link, index) => (
              <Link href={link.href} passHref key={index}>
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
        <Group spacing={'xs'}>
          <Menu>
            <Menu.Target>
              <ActionIcon
                variant="outline"
                color="gray"
                title={changeLocale}
                sx={() => ({
                  textTransform: 'capitalize',
                })}
              >
                {locale}
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {locales?.map((item, index) => (
                <Menu.Item
                  key={index}
                  onClick={toggleLocale}
                  sx={() => ({
                    textTransform: 'capitalize',
                  })}
                >
                    {item}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
          <ActionIcon
            component={NextLink}
            href="https://github.com/soberdeer/rat"
            target="_blank"
            variant="outline"
            color="gray"
            title="GitHub"
            sx={(theme) => ({
              color: colorScheme === 'dark' ? 'white' : theme.colors.dark[5],
            })}
          >
            <GithubIcon size={18} />
          </ActionIcon>
          <ActionIcon
            variant="outline"
            color={colorScheme === 'dark' ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title={changeTheme}
          >
            {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
