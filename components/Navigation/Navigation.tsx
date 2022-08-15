import {
  DefaultProps,
  ActionIcon,
  Group,
  Container,
  Button,
  useMantineColorScheme,
  Title,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { Sun, Moon, Copy, BookOpen, FileText } from 'react-feather';
import Logo from './Logo';
import GithubIcon from './GithubIcon';
import LocaleContext from '../LocaleContext';
import mockdata from '../../mockdata';
import useStyles from './Navigation.styles';

const iconsMap = {
  copy: Copy,
  book: BookOpen,
  file: FileText,
};

interface NavigationProps extends DefaultProps {
  links: typeof mockdata.en.navigation.links,
  changeTheme: string,
  changeLocale: string,
  locales?: (keyof typeof mockdata)[],
}

export function Navigation({
  links,
  changeTheme,
  changeLocale,
  locales,
}: NavigationProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

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
            {links.map((link, index) => {
              const Icon = iconsMap[link.icon as keyof typeof iconsMap] || null;
              return (
                <Button
                  component={NextLink}
                  href={link.href}
                  key={index}
                  color={colorScheme === 'dark' ? 'gray' : 'orange'}
                  variant="light"
                  leftIcon={Icon ? <Icon size={15} /> : null}
                  classNames={{
                    root: classes.buttonRoot,
                    leftIcon: classes.leftIcon,
                  }}
                >
                  <Text className={classes.buttonLabel}>{link.label}</Text>
                </Button>
              );
            })}
          </Group>
        </Group>
        <Group spacing={'xs'}>
          <LocaleContext.Consumer>
            {({ locale, setLocale }) => (
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
                      onClick={() => setLocale(item)}
                      sx={() => ({
                        textTransform: 'capitalize',
                      })}
                    >
                      {item}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            )}
          </LocaleContext.Consumer>
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
