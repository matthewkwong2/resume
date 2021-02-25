import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import routes from 'constants/routes';

const Main = lazy(() => import('pages/Main'));
const NoMatch = lazy(() => import('pages/NoMatch'));

const App = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={routes.main.path}>
          <Main />
        </Route>
        <Route path={routes.noMatch.path}>
          <NoMatch />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;