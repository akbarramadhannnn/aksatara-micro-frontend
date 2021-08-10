import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import GlobalStyles from './assets/GlobalStyles';
import DestinationPage from './pages/destination';

const App = ({ location, history, params }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            component={() => <DestinationPage location={location} params={params} />}
          />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
