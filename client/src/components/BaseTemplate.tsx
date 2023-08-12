import { PropsWithChildren } from 'react';
import { Nav } from './Nav';

type Props = PropsWithChildren;

export const BaseTemplate: React.FC<Props> = props => {
  const { children } = props;

  return (
    <>
      <Nav />

      <main className="container">{children}</main>
    </>
  );
};
