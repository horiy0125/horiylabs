import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './config/pageRoutes';
import { IndexTemplate } from './components/index/IndexTemplate';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageRoutes.index} element={<IndexTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};
