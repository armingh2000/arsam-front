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



const SearchEventForm = () =>{
  const [form] = Form.useForm();

  const history = useHistory();

  const events=[
    {
      name:"e1",
      id:1,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e2",
      id:2,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s2@gmail.com"
      },
      categories:[1,4],
      images:[
        "https://image.cnbcfm.com/api/v1/image/105322791-1531301768595gettyimages-467620670.jpg?v=1573853788&w=1400&h=950"
        ]
    }
    ,
    {
      name:"e3",
      id:3,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s3@gmail.com"
      },
      categories:[1,4,16,32],
      images:[
        "https://www2.eecs.berkeley.edu/Faculty/Photos/Fullsize/abbeel.jpg"
        ,
        "https://www.cifar.ca/images/default-source/bios/lmb_pieterabbeel.png?sfvrsn=36567462_2"
      ]
    }
    ,
    {
      name:"e4",
      id:4,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s4@gmail.com"
      },
      categories:[1,2,8,16,32,64],
      images:[
        "https://thehouse.fund/assets/images/content/profile/pieter_abbeel.png"
      ]
    }
    ,
    {
      name:"e5",
      id:5,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e6",
      id:6,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s6@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e7",
      id:7,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e8",
      id:1104,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }

  ];

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
          {events.map((item)=>{
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

          )}
        </Row>

      </div>
    );
}

export default SearchEventForm;
