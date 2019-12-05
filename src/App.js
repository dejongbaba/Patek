import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import {about, home} from "./routes/routes";


function App() {

    return (
        <>
            <Switch>
                <Route exact path={home} component={Home}/>
                <Route exact path={about} component={About}/>
            </Switch>
        </>
    );
}

export default App;
