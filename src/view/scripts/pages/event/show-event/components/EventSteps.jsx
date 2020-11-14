import React from "react";
import {Steps} from "antd";

const EventSteps = () =>
{
  const {Step} = Steps;

  return (
    <div style={{marginBottom:"50px"}}>
      <Steps progressDot current={0}>
        <Step title="Waiting"/>
        <Step title="Happening"/>
        <Step title="Finished"/>
      </Steps>
    </div>
  );
}

export default EventSteps;
