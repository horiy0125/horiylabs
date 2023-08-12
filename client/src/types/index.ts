import { PropsWithChildren } from 'react';

export type BaseProps = {
  className?: string;
};

export type BasePropsWithChildren = BaseProps & PropsWithChildren;
