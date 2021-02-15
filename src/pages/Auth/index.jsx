import React from 'react';
import {Route} from "react-router-dom";

import "./auth.scss";
import {LoginForm, RegisterForm} from "../../modules";

const Auth = () => {
    return (
        <section className={'auth'}>
            <div className="auth-content">
                <Route  exact path={["/", "/login"]} component={LoginForm}/>
                <Route exact path={"/register"} component={RegisterForm}/>
            </div>
        </section>
    );
};


export default Auth;