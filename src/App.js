import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import {about, career, home, team, patecFood, contact, news, sustainability} from "./routes/routes";
import Team from "./Components/Team/Team";
import Career from "./Components/Career/Career";
import Food from "./Components/Food/Food";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import Sustainability from "./Components/Sustainability/Sustainability";


function App() {

    return (
        <>
            <Switch>
                <Route exact path={home} component={Home}/>
                <Route exact path={about} component={About}/>
                <Route exact path={team} component={Team}/>
                <Route exact path={career} component={Career}/>
                <Route exact path={patecFood} component={Food}/>
                <Route exact path={news} component={News}/>
                <Route exact path={contact} component={Contact}/>
                <Route exact path={sustainability} component={Sustainability}/>
            </Switch>
        </>
    );
}

export default App;
