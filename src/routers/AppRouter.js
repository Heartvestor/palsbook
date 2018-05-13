import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import About from '../components/About';
import PageNotFound from '../components/PageNotFound';
import AddPal from '../components/AddPal';
import PalView from '../components/PalView';
import EditPal from '../components/EditPal';
import Dashboard from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <PrivateRoute path='/addpal' component={AddPal} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/paledit/:id' component={EditPal} />
                <PrivateRoute path='/palview/:id' component={PalView} />
                <Route path='/about' component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
