import { DefaultProps, Grid, Container, Title, Button, Image } from '@mantine/core';
import useStyles from './MainPage.styles';

interface MainPageProps extends DefaultProps {}

export function MainPage({ ...others }: MainPageProps) {
  const { classes } = useStyles();


  return (
    <Container {...others}>

    </Container>
  );
}
