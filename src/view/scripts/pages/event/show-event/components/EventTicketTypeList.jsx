import React, {useState} from "react";
import { List, Avatar, Button, Skeleton, Typography } from 'antd';
import {
  ContainerTwoTone
} from '@ant-design/icons';


const EventTicketTypeList = ({ticketTypes}) =>
{
  const { Text } = Typography;

  return ( <div>
            <List
            header="Ticket Types"
            itemLayout="horizontal"
            dataSource={ticketTypes}
            renderItem={item => (
              <List.Item>
                  <List.Item.Meta
                    avatar={<ContainerTwoTone twoToneColor="#006d75" />}
                    title={item.name}
                    description={item.description}
                  />
                  <div>
                    <Text>Price: {item.price}</Text>
                    <br />
                    <Text>Left: {item.capacity - item.count}</Text>
                  </div>
              </List.Item>
            )}
          />
        </div>
  );

}

export default EventTicketTypeList;
