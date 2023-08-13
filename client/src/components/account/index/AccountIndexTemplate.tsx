import { Link } from 'react-router-dom';
import { AuthTemplate } from '../../common/AuthTemplate';
import { pageRoutes } from '../../../config/pageRoutes';

export const AccountIndexTemplate: React.FC = () => {
  return (
    <AuthTemplate>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link to={pageRoutes.index}>horiylabs</Link>
          </li>
          <li>
            <Link to={pageRoutes.account.index}>Account</Link>
          </li>
        </ul>
      </nav>

      <h1>アカウント情報</h1>
    </AuthTemplate>
  );
};
