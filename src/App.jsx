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
                    <Link to="/#about">About</Link>
                    <Link to="/#services">Services</Link>
                    <Link to="/#projects">Projects</Link>
                    <Link to="/#contact">Contact</Link>
                </Navigation>
            </header>
            <AppRouter />
        </Router>
    );
}

export default App;
