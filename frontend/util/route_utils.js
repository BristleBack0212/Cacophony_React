import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, withRouter} from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/servers/@me" />
    }
  />
);


const Protected = ({loggedIn, path, component: Component}) => {
  return(
    <Route
    path ={path}
    render ={props => (
      // Either render the component or redirect to login. Login chosen over 
      // signup as most users of a website are repeat users to going to login
      // makes it more user friendly for our the average user.
      loggedIn ? <Component {...props}/> : <Redirect to="/login"/>
    )}
    />
  );
};

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))