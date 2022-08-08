import { DefaultProps, Text, Container, SimpleGrid } from '@mantine/core';
import { Card } from './Card/Card';
import images from './images';
import { AlphabetTable } from '../AlphabetTable/AlphabetTable';

interface MainPageProps extends DefaultProps {
  hero: string,
  cards: {
    image: keyof typeof images,
    title: string,
    link: string,
  }[],
}

export function MainPage({
  hero,
  cards,
  ...others
}: MainPageProps) {
  return (
    <Container {...others}>
      <Text align="center" py={40}>{hero}</Text>
      <AlphabetTable pb={40}/>
      <SimpleGrid cols={2}>
        {cards.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
