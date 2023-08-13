import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './config/pageRoutes';
import { IndexTemplate } from './components/index/IndexTemplate';
import { SignInTemplate } from './components/signIn/SignInTemplate';
import { AccountIndexTemplate } from './components/account/index/AccountIndexTemplate';
import { AccountEditTemplate } from './components/account/edit/AccountEditTemplate';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageRoutes.index} element={<IndexTemplate />} />

        <Route path={pageRoutes.signIn} element={<SignInTemplate />} />

        <Route
          path={pageRoutes.account.index}
          element={<AccountIndexTemplate />}
        />
        <Route
          path={pageRoutes.account.edit}
          element={<AccountEditTemplate />}
        />
      </Routes>
    </BrowserRouter>
  );
};
