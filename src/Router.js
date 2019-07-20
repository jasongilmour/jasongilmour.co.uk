import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import HailTo from './pages/HailTo';

const AppRouter = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hailto" exact component={HailTo} />
    </Switch>
);

export default AppRouter;
