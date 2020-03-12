import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import {
    about,
    blog,
    career,
    coloradoFarm,
    contact,
    event,
    goldenFood,
    home,
    news,
    patecFood,
    qualityPackaging,
    subsidiary,
    sustainability,
    team,
    traveliFood,
    view
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
import ArticleViewer from "./Containers/ArticleViewer/ArticleViewer";
import QualityPackaging from "./Containers/Food/QualityPackaging";
import Subsidiary from "./Containers/Subsidiary/Subsidiary";
import ReactGA from 'react-ga';

class App extends Component {

    constructor(props) {
        super(props);
        AOS.init();

    }


    componentDidMount() {
        ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
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
                    <Route exact path={qualityPackaging} component={QualityPackaging}/>
                    <Route exact path={subsidiary} component={Subsidiary}/>
                    <Route exact path={news} component={News}/>
                    <Route exact path={news} component={News}/>
                    <Route exact path={view} component={ArticleViewer}/>
                    <Route exact path={blog} component={News}/>
                    <Route exact path={event} component={News}/>
                    <Route exact path={contact} component={Contact}/>
                    <Route exact path={sustainability} component={Sustainability}/>
                </Switch>
            </>
        );
    }
}

export default App;
