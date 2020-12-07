import React, {useState, useEffect} from 'react';
import axios from "axios";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Checkbox,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
  Card,
  Spin
} from 'antd';
import moment from 'moment';
import EventGrid from "./EventGrid";
import { UploadOutlined, InboxOutlined, FrownOutlined, FrownTwoTone, FilterTwoTone, RobotOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import EventImages from "./EventImages";
import EventDetails from "./EventDetails";
import { sendFilterRequest } from '../../../../../core/api/actions/FilterActions';
import { withRouter } from "react-router";
import Icon from '@ant-design/icons';
import { connect } from "react-redux";


const SearchEventForm = (props) =>{
  const [form] = Form.useForm();

  const history = useHistory();
  const [scroll, setScroll] = useState(0);

  function getBody(props) {
    if(props.pageNumber===undefined){
      return {
          Name: props.name,
          DateMin: props.dateMin,
          DateMax: props.dateMax,
          IsPrivate:props.isPrivate,
          IsProject: props.isProject,
          MembersCountMin: props.MembersCountMin,
          MembersCountMax: props.MembersCountMax,
          Categories: props.Categories,
          PageNumber: props.PageNumber,
          PageSize: props.PageSize
      }
    }
    else{
      return {
          Name: props.name,
          DateMin: props.dateMin,
          DateMax: props.dateMax,
          IsPrivate:props.isPrivate,
          IsProject: props.isProject,
          MembersCountMin: props.membersCountMin,
          MembersCountMax: props.membersCountMax,
          Categories: props.categories,
          PageNumber: props.pageNumber,
          PageSize: props.pageSize
      }
    }
 
  }

  useEffect(() => {
    // if(match.path === "/filter") {
    // props.dispatch(sendFilterRequest(window.FP.getBody()));
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log(window.FP.getBody());
    // console.log(getBody(props.filter));
    props.dispatch(sendFilterRequest(getBody(props.filter)));
    // }
  }, []);

  function handleScroll(e){

    setScroll(e.target.scrollTop);
    console.log(props.shouldSendSearchRequest, scroll % 270);
    if(props.shouldSendSearchRequest && scroll % 270 > 200){
      // console.log("reached here");
      setScroll(0);
      // window.FP.state.pageNumber++;
      // props.dispatch(sendFilterRequest(window.FP.getBody()));
      props.filter.PageNumber++;
      // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
      // console.log(props.filter);
      props.dispatch(sendFilterRequest(getBody(props.filter)));
    }
    // const bottom = ((e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight);
    // if(bottom && props.events.length == 5){
      // console.log("body:");
      // console.log(window.FP.getBody());
      // window.FP.state.pageNumber++;
      // console.log("window state:");
      // console.log(window.FP.state);
    // }
  }

  function handelClick(item){

    console.log(item);
    redirectUser(item.id);

    // console.log(id);
  }

  function redirectUser(eventId){
    history.replace(`/event/${eventId}`);
  }


  console.log("conditions");
  console.log(".........................................");
  console.log(props.events.length);
  console.log(props.loading);
  console.log(props.filter.pageNumber);
  console.log(props.filter) ;
  console.log("..........................................");


  if((props.events.length>0)){
    return (
      <div className="scrollable" onScroll={handleScroll}>

        <Row gutter={[20,10]}>

          {
              props.events.map((item)=>{
              return(
                <Col span={8}>
                  <Card className="card" onClick={()=>handelClick(item)}>

                    <EventImages images={item.images}/>

                    <EventDetails
                          name={item.name}
                          startDate={item.startDate}
                          endDate={item.endDate}
                          creator={item.creator}
                          categories={item.categories}/>

                  </Card>
                </Col>
              );
            })
          }



        </Row>

      </div>
    );
  }
  else if(props.events.length===0 && !props.loading){
    return (
      <div className="not-found">
        {
        // <PandaIcon style={{ fontSize: '32px' }} />
        // <FrownOutlined className="icon"/>
        }
        <FrownTwoTone className="icon"/>
        {
        // <FilterTwoTone className="icon"/>
        // <RobotOutlined className="icon"/>
        }
        <br />
        <br />

        <h2>Oops!!! we didn't find such event</h2>

      </div>
    );
  }
  else if(props.loading && (props.filter.pageNumber===1||props.filter.PageNumber===1)){
    // console.log("-----------------------------------------------------------------------------");
    // console.log(props.filter);
    return(
      <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
        <Col>
          <Spin size="large"/>
        </Col>
      </Row>
    )
  }
}

export default SearchEventForm;
