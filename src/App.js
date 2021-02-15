import React from "react";
import 'antd/dist/antd.css';
import {Route} from "react-router-dom";

import {Auth} from "./pages";
import Home from "./pages/Home";


function App() {
    return (
        <div className="wrapper">
            <Route exact path={["/", "/login", "/register"]} component={Auth}/>
            <Route exact path={"/im"} component={Home}/>
        </div>
    );
}

export default App;
