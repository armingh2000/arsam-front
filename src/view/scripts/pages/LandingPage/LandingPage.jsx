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

  return<div id="landing-page">

        <Layout>

        <Header className="landing-page-header">

          <div id="img-div">
          <Row>
            <Col span={18}>
              <Image
              width={70}
              height={70}
              src={EventusLogo2}
              />
            </Col>
            <Col span={6}>
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
              Questions? Call 1-124-567-8990
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
                  Created by:
                </h5>
                <Image
                width={100}
                src={ARSAMLogo}
                />

                <br/>
                <Space>
                  <a><InstagramOutlined className="social-media"/></a>
                  <a><LinkedinOutlined className="social-media"/></a>
                  <a><YoutubeOutlined className="social-media"/></a>
                  <a><FacebookOutlined className="social-media"/></a>
                  <a><GooglePlusOutlined className="social-media"/></a>
                </Space>
              </Col>

              <Col span={8} className="left-text">
                Contact us:
                <br/>
                <a>ali@gmail.com</a>
                <br/>
                <a>armin@gmail.com</a>
                <br/>
                <a>melika@gmail.com</a>
                <br/>
                <a>mostafa@gmail.com</a>
                <br/>
                <a>sohrab@gmail.com</a>

              </Col>

            </Row>

          </div>

        </Footer>
      </Layout>
    </div>
}

export default LandingPage;
