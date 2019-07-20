import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouter from 'Router';

import { Navigation } from 'components';

import 'styles/app.scss';

function App() {
    return (
        <Router>
            <header className="global-header">
                <Navigation>
                    <Link to="/">About</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Project</Link>
                    <Link to="/">Contact</Link>
                </Navigation>
            </header>
            <AppRouter />
        </Router>
    );
}

export default App;
