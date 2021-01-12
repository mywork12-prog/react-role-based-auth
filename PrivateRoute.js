import React from 'react';
import {RoleBased} from './Role'
import { Route, Redirect,useHistory } from 'react-router-dom';


const PrivateRoute = ({component: Component,...rest}) => {
  let history = useHistory()

     const isLogin = () => {
        if (localStorage.getItem('jwt')) {
          RoleBased(localStorage.getItem('role'),rest.location.pathname,history);
          return true;
        }else{
          return false;
        }


    }
    console.log()
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
