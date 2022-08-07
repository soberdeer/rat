import { BoxProps as MantineBoxProps, Box as MantineBox } from '@mantine/core';

interface BoxProps extends MantineBoxProps {
}

export default function Box({
  children,
  ...others
}: BoxProps) {
  return (
    <MantineBox
      py={40}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
      {...others}
    >
      {children}
    </MantineBox>
  );
}
