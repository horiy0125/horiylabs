import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const BaseTemplate: React.FC<Props> = props => {
  const { children } = props;

  return <main className="container">{children}</main>;
};
