import React from "react";
import Login from "./view/scripts/pages/login/Login";
import Home from "./view/scripts/pages/home/Home";
import Signup from "./view/scripts/pages/signup/Signup";
import Account from "./view/scripts/pages/account/Account";
import ShowEvent from "./view/scripts/pages/show-event/ShowEvent";
import 'antd/dist/antd.css';
import "./view/styles/main.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (<Router>
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/account" component={Account}/>
        <Route path="/event" exact={true} component={ShowEvent}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  </Router>);
}

export default App;
