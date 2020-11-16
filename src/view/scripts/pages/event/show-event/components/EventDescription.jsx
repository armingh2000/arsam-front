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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus. Scelerisque in dictum non consectetur a erat nam at lectus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Libero volutpat sed cras ornare arcu dui vivamus. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Non enim praesent elementum facilisis leo vel fringilla. Amet mattis vulputate enim nulla aliquet porttitor lacus.
        <br/>
        <br/>
        Lacus sed turpis tincidunt id aliquet risus feugiat in. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ullamcorper sit amet risus nullam eget felis eget nunc. Mi sit amet mauris commodo quis imperdiet massa. Elementum sagittis vitae et leo duis.
      </Text>
    </div>
  );
}

export default EventDescription;
