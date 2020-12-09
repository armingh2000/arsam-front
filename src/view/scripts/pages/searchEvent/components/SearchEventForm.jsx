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
import { sendFilterRequest, addFilterPageNumber } from '../../../../../core/api/actions/FilterActions';
import { withRouter } from "react-router";
import Icon from '@ant-design/icons';
import { connect } from "react-redux";



const SearchEventForm = (props) =>{
  const [form] = Form.useForm();

  const history = useHistory();
  const [scroll, setScroll] = useState(0);

  function getBody(props) {
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

  useEffect(() => {
    // props.dispatch(sendFilterRequest(window.FP.getBody()));
    // console.log(window.FP.getBody());
    // console.log(getBody(props.filter));
    props.dispatch(sendFilterRequest(getBody(props.filter),false));
  }, []);

  function handleScroll(e){

    setScroll(e.target.scrollTop);
    // console.log(props.shouldSendSearchRequest, scroll % 270);
    if(props.shouldSendSearchRequest && scroll % 270 > 200){
      setScroll(0);
      // window.FP.state.pageNumber++;
      // props.dispatch(sendFilterRequest(window.FP.getBody()));
      // props.filter.PageNumber++;
      console.log("props.filter1");
      console.log(props.filter);
      props.dispatch(addFilterPageNumber());
      props.dispatch(sendFilterRequest(getBody(props.filter),true));
      console.log("props.filter2");
      console.log(getBody(props.filter));
    }
  }

  function handelClick(item){

    console.log(item);
    redirectUser(item.id);

    // console.log(id);
  }

  function redirectUser(eventId){
    history.replace(`/event/${eventId}`);
  }



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
  else if(props.loading && (props.filter.pageNumber===1)){
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
