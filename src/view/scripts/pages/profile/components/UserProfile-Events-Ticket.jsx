import React, {useState, useEffect} from 'react';
import axios from "axios";
import UserEventsForm from "./ShowUserEventsTicket/UserEventsForm";
import { Tabs } from 'antd';
import { connect } from 'react-redux';

const UserEventsTickets=({user})=>{

  const { TabPane } = Tabs;


  // function callback(key) {
  // console.log(key);
  // }


  return(
    <div id="user-events-form-components">
    <Tabs defaultActiveKey="1">
      <TabPane tab="Events You Created" key="1">
        <UserEventsForm
        events={user.createdEvents}
        />
      </TabPane>
      <TabPane tab="Events You Are Member Of Them" key="2">
        <UserEventsForm
        events={user.inEvents}
        />
      </TabPane>
      <TabPane tab="Tickets You Buy" key="3">
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
