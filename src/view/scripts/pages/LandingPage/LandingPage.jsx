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
            width={100}
            height={100}
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
                width={200}
                src={ARSAMIcon}
                />
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
