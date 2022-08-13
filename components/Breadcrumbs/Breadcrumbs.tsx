import {
  Breadcrumbs as MantineBreadcrumbs,
  Anchor,
  DefaultProps,
} from '@mantine/core';
import { NextLink } from '@mantine/next';


export type Breadcrumb = { title: string, href: string };

interface Breadcrumbs extends DefaultProps {
  breadcrumbs: Breadcrumb[],
}

export default function Breadcrumbs({
  breadcrumbs,
  ...others
}: Breadcrumbs) {
  return (
    <MantineBreadcrumbs py={40} {...others}>
      {breadcrumbs.map((item, index) => (
        <Anchor component={NextLink} href={item.href} key={index}>
          {item.title}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
}
