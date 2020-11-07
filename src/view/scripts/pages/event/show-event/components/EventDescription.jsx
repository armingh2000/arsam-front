import React from "react";
import {
  Descriptions
} from "antd";

const EventDescription = (props) =>
{

  return (
    <Descriptions title={props.name} bordered>
      <Descriptions.Item label="Description" span={4}>{props.description}</Descriptions.Item>
      <Descriptions.Item label="Start Date">{props.startDate}</Descriptions.Item>
      <Descriptions.Item label="End Date">{props.endDate}</Descriptions.Item>
    </Descriptions>
  );
}

export default EventDescription;
