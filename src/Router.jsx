import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

// eslint-disable-next-line react/function-component-definition
const AppRouter = () => (
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
);

export default AppRouter;
