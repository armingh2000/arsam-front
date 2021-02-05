import React from "react";
import {Layout, Row, Col, Image, Space} from 'antd';
import LandingForm from './components/LandingForm';
import EventusIcon from "./Images/eventus-good.png";
import ARSAMIcon from "./Images/arsam-good.png";
import EventusLogo from "./Images/Eventus-logo.png";
import EventusLogo2 from "./Images/Eventus-logo2.png";
import ARSAMLogo from "./Images/arsam-logo.png";
import { UploadOutlined, InboxOutlined , CalendarOutlined ,TwoTone, SketchOutlined, InstagramOutlined,
RedditOutlined, FacebookOutlined, GooglePlusOutlined, AmazonOutlined, SkypeOutlined, GitlabOutlined ,
GoogleOutlined , YoutubeOutlined, LinkedinOutlined ,TwitterOutlined,
} from '@ant-design/icons';
import LandingMenu from "./components/LandingMenu";


const { Header, Content, Footer } = Layout;

const LandingPage = () => {
  var today = new Date();
  var year=String(today.getFullYear());

  return<div id="landing-page">

        <Layout>

        <Header className="landing-page-header">

          <div id="img-div">
          <Row>
            <Col xs={6} sm={8} md={9} lg={12} xl={16}>
              <Image
              width={60}
              height={60}
              src={EventusLogo2}
              />
            </Col>
            <Col xs={18} sm={16} md={15} lg={12} xl={8}>
              <LandingMenu/>
            </Col>
          </Row>
          </div>

        </Header>

        <Content>
          <div id="landing-form">
            <Row justify="center" align="middle">
              <Col span={22}><LandingForm /></Col>
            </Row>
          </div>
        </Content>

        <Footer className="landing-page-footer">

          <div id="img-div-footer">

            <Row>

              <Col span={8} className="left-text">
              <b><i>Questions? Call 1-234-567-8990</i></b>
              <br/>
                <a>FAQ</a>
                <br/>
                <a>Investor Relations</a>
                <br/>
                <a>Corporate Information</a>
                <br/>
                <a>Help Center</a>
                <br/>
                <a>Terms of Use</a>
              </Col>

              <Col span={8}>
                <h5>
                  <b><i>Created by:</i></b>
                </h5>
                <Image
                width={100}
                src={ARSAMLogo}
                />

                <br/>
                <b><i>Eventus.ir © 2020 - {year} All rights reserved</i></b>

              </Col>

              <Col span={8} className="left-text">
                <b><i>Contact us:</i></b>
                <br/>
                <a><i>Eventus.arsam@gmail.com</i></a>
                {
                // <a>ali@gmail.com</a>
                // <br/>
                // <a>armin@gmail.com</a>
                // <br/>
                // <a>melika@gmail.com</a>
                // <br/>
                // <a>mostafa@gmail.com</a>
                // <br/>
                // <a>sohrab@gmail.com</a>
                }

                <br/>
                <Space>
                  <a><InstagramOutlined className="social-media"/></a>
                  <a><LinkedinOutlined className="social-media"/></a>
                  <a><YoutubeOutlined className="social-media"/></a>
                  <a><FacebookOutlined className="social-media"/></a>
                  <a><GooglePlusOutlined className="social-media"/></a>
                </Space>
              </Col>

            </Row>

          </div>

        </Footer>
      </Layout>
    </div>
}

export default LandingPage;
