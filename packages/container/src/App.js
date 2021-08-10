import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { LoadingCircle } from './components';
import Layout from './layout';
import Routes from './routes';

const App = () => {
  console.log('test')
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="fallback">
            <LoadingCircle />
          </div>
        }
      >
        {Routes.map((route, i) => {
          return (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Suspense>
    </Layout>
  );
};

export default App;
