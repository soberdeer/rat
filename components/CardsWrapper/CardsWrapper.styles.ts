import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  screen: {
    alignItems: 'center',
  },

  boxes: {
    flexWrap: 'nowrap',
    width: '100%',
    justifyContent: 'center',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexWrap: 'nowrap',
    },
  },

  box: {
    flex: 1,
    height: 400,
    flexBasis: 200,
    maxWidth: 300,
    cursor: 'default !important',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 200,
    },
  },

  cardGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },

  rightCard: {
    justifyContent: 'space-between',

    flexWrap: 'nowrap',
  },

  cardText: {
    fontSize: 120,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 200,
      fontSize: 60,
    },
  },

  answer: {
    width: '100%',
  },

  answerBlock: {
    alignItems: 'center',
    width: '100%',
  },

  ruLetter: {
    lineHeight: '100px',
    paddingTop: 117,
    fontSize: 100,
    textTransform: 'capitalize',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 20,
      fontSize: 60,
      lineHeight: '60px',
    },
  },

  stepBody: {
    display: 'none',
  },

  stepIcon: {
    width: 10,
    height: 10,
    minWidth: 10,
    fontSize: 0,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      borderRadius: 2,
      width: 2,
      minWidth: 2,
    },
  },

  stepCompletedIcon: {
    display: 'none',
  },

  separator: {
    margin: 0,
    flex: 1,
    height: 0,
  },
}));
