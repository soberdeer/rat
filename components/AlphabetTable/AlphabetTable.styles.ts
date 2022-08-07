import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    width: '100%',
  },

  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  boxWrapper: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  box: {
    width: 80,
    height: 40,
    minWidth: 80,
    padding: 5,
    paddingLeft: 10,
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.orange[0],

    '& + &': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      width: 40,
      paddingLeft: 5,
      minWidth: 40,
      justifyContent: 'center',
    }
  },

  char: {
    fontSize: 24,
  }
}));
