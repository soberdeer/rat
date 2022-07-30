import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontSize: 34,
    lineHeight: 1.2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
      lineHeight: 1.3,
      textAlign: 'center',
    },
  },

  button: {
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('sm')]: {
      display: 'block',
      width: '100%',
      maxWidth: 350,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  image: {
    pointerEvents: 'none',
    userSelect: 'none',
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mobileImage: {
    width: '90%',
    maxWidth: 350,
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));
