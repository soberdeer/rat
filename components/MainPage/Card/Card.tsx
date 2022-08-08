import { DefaultProps, Stack, Title, UnstyledButton } from '@mantine/core';
import Box from '../../Box/Box';
import images from '../images';
import Link from 'next/link';

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

  return (
    <Link href={link} passHref>
      <UnstyledButton component="a" {...others}>
        <Box>
          <Stack align="center">
            {Image && <Image size={200} />}
            <Title>{title}</Title>
          </Stack>
        </Box>
      </UnstyledButton>
    </Link>
  );
}
