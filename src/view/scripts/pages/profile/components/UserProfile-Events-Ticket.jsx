import React, {useState, useEffect} from 'react';
import axios from "axios";
import UserEventsForm from "./ShowUserEventsTicket/UserEventsForm";
import { Tabs, Button } from 'antd';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';

const UserEventsTickets=({user})=>{

  const history = useHistory();

  const { TabPane } = Tabs;

  function handelClick(){
    history.replace("/createevent");
  }

  const operations = (

  <Button className="btn2 center-button2" onClick={handelClick}>
    <svg>
      <defs>
        <linearGradient id="grad1">
          <stop offset="0%" stop-color="#7183f5" />
          <stop offset="100%" stop-color="#74ddfc" />
        </linearGradient>
      </defs>
      <rect fill="none" stroke="url(#grad1)"></rect>
    </svg>

    <span className="center-span">Create Event</span>

  </Button>
// <Button>asadfasdfasdfasdf</Button>
);

  // function callback(key) {
  // console.log(key);
  // }


  return(
    <div id="user-events-form-components">
    <Tabs defaultActiveKey="1" centered tabBarExtraContent={operations}>
      <TabPane tab="Events" key="1">
        <UserEventsForm
        events={user.createdEvents}
        isAdmin={true}
        />
      </TabPane>
      <TabPane tab="Participations" key="2">
        <UserEventsForm
        events={user.inEvents}
        isAdmin={false}
        />
      </TabPane>
      <TabPane tab="Tickets" key="3">
        nothing to show
      </TabPane>
    </Tabs>
    </div>
  );
}



const mapStateToProps = (state) => {
    return{
        user: state.profile.user,
        status: state.status
    }
  }

export default connect(mapStateToProps)(UserEventsTickets);
