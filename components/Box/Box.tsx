import { BoxProps as MantineBoxProps, Box as MantineBox } from '@mantine/core';

interface BoxProps extends MantineBoxProps {
  clickable?: boolean
}

export default function Box({
  children,
  clickable,
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
        cursor: clickable ? 'pointer' : 'default',

        ...(clickable ? {
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        } : {}),
      })}
      {...others}
    >
      {children}
    </MantineBox>
  );
}
