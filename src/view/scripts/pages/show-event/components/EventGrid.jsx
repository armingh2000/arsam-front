import React from "react";
import { 
    Row,
    Col } from "antd";

const EventGrid = () =>
{


    return (
        <Row style={{
            minHeight: '100vh'
        }} justify="center" align="middle">
        <Col span={12} style={{backgroundColor:"red"}}>
        <p>hey</p>
        
        </Col>
        <Col span={12} style={{backgroundColor:"blue"}}>
        <p> Hello2 </p>
        </Col>
        </Row>
    );
}

export default EventGrid;
