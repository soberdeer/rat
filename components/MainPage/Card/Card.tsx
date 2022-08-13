import { DefaultProps, Stack, Title, UnstyledButton } from '@mantine/core';
import Box from '../../Box/Box';
import images from '../images';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

interface CardProps extends DefaultProps {
  image: keyof typeof images,
  title: string,
  link: string,
}

export function Card({
  image,
  title,
  link,
  ...others
}: CardProps) {
  const Image = images[image];
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <Link href={link} passHref>
      <UnstyledButton component="a" {...others}>
        <Box clickable>
          <Stack align="center">
            {Image && <Image size={isMobile ? 80 : 200} />}
            <Title>{title}</Title>
          </Stack>
        </Box>
      </UnstyledButton>
    </Link>
  );
}
