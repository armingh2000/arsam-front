import React, {useState} from 'react';
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
  Card } from 'antd';
import moment from 'moment';
import EventGrid from "./EventGrid";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import EventImages from "./EventImages";
import EventDetails from "./EventDetails";



const SearchEventForm = (props) =>{
  const [form] = Form.useForm();

  const history = useHistory();


  function handleScroll(e){
    // const elem=document.getElementById("search-event-component");
    // console.log(".");
    const bottom = ((e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight);
    if(bottom){
      console.log("end of scroll");
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

  return (
      <div className="scrollable" onScroll={handleScroll}>

        <Row gutter={[7,10]}>
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
          }
          )
        }
        </Row>

      </div>
    );
}

export default SearchEventForm;
