import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import RegionPage from './pages/region';
import GlobalStyles from './assets/GlobalStyles';

const App = ({ location, history }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            component={() => <RegionPage location={location} />}
          />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
