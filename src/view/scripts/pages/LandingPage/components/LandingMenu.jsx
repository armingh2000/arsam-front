import React, {useState} from 'react';
import axios from "axios";
import {
  Tabs,
  Layout,
  Row,
  Col,
  Form,
  Input,
  Image,
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
  Divider,
  Upload,
  Space,
  Menu } from 'antd';
import EventusIcon from "../Images/eventus-good.png";
import ARSAMIcon from "../Images/arsam-good.png";
import { UploadOutlined, InboxOutlined , CalendarOutlined ,TwoTone, SketchOutlined,
MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const LandingMenu = () =>{
  const { SubMenu } = Menu;

  const history = useHistory();
  const { TabPane } = Tabs;

  function handleOnClick(){
    // history.replace('/signup');
  }

  function RedirectUser(url){
    history.replace(`/${url}`);
  }

  return (
    <div id="landing-menu">

      <Row>
        <Space>
          <Col>
            <a onClick={()=>RedirectUser("filter")}>Explore</a>
          </Col>
          <Divider type="vertical" />
          <Col>
            <a onClick={()=>RedirectUser("login")}>Login</a>
          </Col>
          <Divider type="vertical" />
          <Col>
            <a>Services</a>
          </Col>
          <Divider type="vertical" />
          <Col>
            <a>About us</a>
          </Col>
        </Space>
      </Row>
      {
      // <Menu onClick={handleOnClick} mode="horizontal">
      //   <Menu.Item key="mail" icon={<MailOutlined />}>
      //     Navigation One
      //   </Menu.Item>
      //
      //   <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
      //     <Menu.ItemGroup title="Item 1">
      //       <Menu.Item key="setting:1">Option 1</Menu.Item>
      //       <Menu.Item key="setting:2">Option 2</Menu.Item>
      //     </Menu.ItemGroup>
      //     <Menu.ItemGroup title="Item 2">
      //       <Menu.Item key="setting:3">Option 3</Menu.Item>
      //       <Menu.Item key="setting:4">Option 4</Menu.Item>
      //     </Menu.ItemGroup>
      //   </SubMenu>
      //   <Menu.Item key="alipay">
      //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      //       Navigation Four - Link
      //     </a>
      //   </Menu.Item>
      // </Menu>
      }
    </div>
  );

}

export default LandingMenu;
