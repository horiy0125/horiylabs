import { BaseProps } from '../types';
import { classes } from '../utils/classes';

type Props = BaseProps;

export const Nav: React.FC<Props> = props => {
  const { className } = props;

  return <nav className={classes(className, 'container-fluid')}></nav>;
};
