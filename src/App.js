import React from "react";
import Login from "./view/scripts/pages/login/Login";
import Home from "./view/scripts/pages/home/Home";
import Signup from "./view/scripts/pages/signup/Signup";
import CreateEvent from "./view/scripts/pages/createEvent/CreateEvent"
import Profile from "./view/scripts/pages/profile/Profile";
import ShowEvent from "./view/scripts/pages/event/show-event/ShowEvent";
import SearchEvent from "./view/scripts/pages/searchEvent/SearchEvent";

import 'antd/dist/antd.css';
import "./view/styles/main.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (<Router>
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/event/:eventId" exact={true} component={ShowEvent}/>
        <Route path="/createevent" component={CreateEvent} />
        <Route path="/searchevent" component={SearchEvent} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  </Router>);
}

export default App;
