import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './config/pageRoutes';
import { IndexTemplate } from './components/index/IndexTemplate';
import { SignInTemplate } from './components/signIn/SignInTemplate';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageRoutes.index} element={<IndexTemplate />} />

        <Route path={pageRoutes.signIn} element={<SignInTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};
