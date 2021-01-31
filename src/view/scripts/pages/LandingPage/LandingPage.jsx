import React from "react";
import {Layout, Row, Col, Image} from 'antd';
import LandingForm from './components/LandingForm';
import EventusIcon from "./Images/eventus-good.png";
import ARSAMIcon from "./Images/arsam-good.png";

const { Header, Content, Footer } = Layout;

const LandingPage = () => {

  return<div id="landing-page">

        <Layout>

        <Header className="landing-page-header">

          <div id="img-div">
            <Image
            width={90}
            src={EventusIcon}
            />
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
            <h5>
              created by:
            </h5>
            <Image
            width={100}
            src={ARSAMIcon}
            />
          </div>

        </Footer>
      </Layout>
    </div>
}

export default LandingPage;
