import React from "react";
import Login from "./view/scripts/pages/login/Login";
import Home from "./view/scripts/pages/home/Home";
import Signup from "./view/scripts/pages/signup/Signup";
import CreateEvent from "./view/scripts/pages/createEvent/CreateEvent";
import Profile from "./view/scripts/pages/profile/Profile";
import ShowEvent from "./view/scripts/pages/event/show-event/ShowEvent";
import EventAdmin from "./view/scripts/pages/event/eventAdmin/EventAdmin";
import ShowFilter from "./view/scripts/pages/event/Filter/ShowFilter";
import 'antd/dist/antd.css';
import "./view/styles/main.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuBar from "./view/scripts/sharedComponents/menu/MenuBar";

function App() {

    return (<Router>
            <div className="App" style={{overflowY:"hidden", height:"100vh"}}>
            <MenuBar />
            <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile/:id"  component={Profile}/>
            <Route path="/event/:eventId" exact={true} component={ShowEvent}/>
            <Route path="/event/:eventId/admin" exact={true} component={EventAdmin}/>
            <Route path="/createevent" component={CreateEvent} />
            <Route path="/filter" component={ShowFilter}/>
            <Route path="/" component={Home}/>
            </Switch>
            </div>
            </Router>);

}

export default App;
