import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import HailTo from './pages/HailTo';

const AppRouter = () => (
    <main>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hailto" exact component={HailTo} />
        </Switch>
    </main>
);

export default AppRouter;
