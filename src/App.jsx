import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from 'Router';
import { Navigation } from 'components';
import 'styles/app.scss';

function App() {
    return (
        <Router>
            <header className="global-header">
                <Navigation />
            </header>
            <AppRouter />
        </Router>
    );
}

export default App;
