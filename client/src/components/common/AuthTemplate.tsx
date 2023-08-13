import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const AuthTemplate: React.FC<Props> = props => {
  const { children } = props;

  return <main className="container">{children}</main>;
};
