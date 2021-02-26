import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from 'Fallback';
import routes from 'constants/routes';

const Main = lazy(() => import('pages/Main'));
const NoMatch = lazy(() => import('pages/NoMatch'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path={routes.main.path} element={<Main />} />
        <Route path={routes.noMatch.path} element={<NoMatch />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;