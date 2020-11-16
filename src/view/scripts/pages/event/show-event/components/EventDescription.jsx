import React from "react";
import {
  Descriptions,
  Typography
} from "antd";

const EventDescription = (props) =>
{
  const { Text, Title } = Typography;

  return (<div>
      <Title level={2}>Description:</Title>
      <br/>
      <Text>
        {props.description}
      </Text>
    </div>
  );
}

export default EventDescription;
