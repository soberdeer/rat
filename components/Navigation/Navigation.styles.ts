import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.orange[0],
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.orange[6],
  },
}));
