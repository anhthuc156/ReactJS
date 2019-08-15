import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';

function App() {

    return (
        <BrowserRouter>
            <div>
                <Menu />
                <div className="container">
                    <div className="row">
                        {showMenus(routes)}
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );

    function showMenus(routes) {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) =>
                <Route key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            )
        }
        return <Switch>{result}</Switch>
    }
}

export default App;
