import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import {
    about,
    career,
    home,
    team,
    patecFood,
    contact,
    news,
    sustainability,
    coloradoFarm,
    goldenFood, traveliFood
} from "./routes/routes";
import Team from "./Containers/Team/Team";
import Career from "./Containers/Career/Career";
import Food from "./Containers/Food/Food";
import News from "./Containers/News/News";
import Contact from "./Containers/Contact/Contact";
import Sustainability from "./Containers/Sustainability/Sustainability";
import Farm from "./Containers/Farm/Farm";
import GoldenFood from "./Containers/Food/GoldenFood";
import TraveliFood from "./Containers/Food/TraveliFood";
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {

    constructor(props){
        super(props);
        AOS.init();
    }


    render() {
        return (
            <>
                <Switch>
                    <Route exact path={home} component={Home}/>
                    <Route exact path={about} component={About}/>
                    <Route exact path={team} component={Team}/>
                    <Route exact path={career} component={Career}/>
                    <Route exact path={patecFood} component={Food}/>
                    <Route exact path={goldenFood} component={GoldenFood}/>
                    <Route exact path={traveliFood} component={TraveliFood}/>
                    <Route exact path={coloradoFarm} component={Farm}/>
                    <Route exact path={news} component={News}/>
                    <Route exact path={contact} component={Contact}/>
                    <Route exact path={sustainability} component={Sustainability}/>
                </Switch>
            </>
        );
    }
}

export default App;
