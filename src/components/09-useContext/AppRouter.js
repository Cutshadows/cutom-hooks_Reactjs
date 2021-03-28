import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import { NavBar } from './NavBar';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div >
                <NavBar/>
                <div className="container">
                <Switch>
                    <Route exact path="/about"  component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={HomeScreen} />
                    <Redirect  to="/" />
                </Switch>
                </div>
            </div>
        </Router>
    )
}
