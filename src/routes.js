import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './common/constants';
import LandingPage from './components/landingPage'
import LoginIn from './components/login';
import SignUp from './components/signup';

const AppRouters = () =>

  (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path={`/${routes.LOGIN}`} component={LoginIn} />
      <Route exact path={`/${routes.SIGNUP}`} component={SignUp} />
      <Route path="*" render={() => <div>Page not Found</div>} />
    </Switch>
  )
;

export { AppRouters as Routers };