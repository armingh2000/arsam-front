import React, {useState} from "react";
import { List, Avatar, Button, Skeleton, Typography } from 'antd';
import {
  ContainerTwoTone
} from '@ant-design/icons';
import TicketEditModal from "./TicketEditModal";


const EventAdminTicketTypeList = ({ticketTypes, dispatch}) =>
{
  const { Text } = Typography;

  return (
    <List
    itemLayout="horizontal"
    dataSource={ticketTypes}
    renderItem={item => (
      <List.Item actions={[<TicketEditModal dispatch={dispatch} ticket={item}/>, <a>delete</a>]}>
          <List.Item.Meta
            avatar={<ContainerTwoTone />}
            title={item.name}
            description={item.description}
          />
          <div>
            <Text>Price: {item.price}</Text>
            <br />
            <Text>Sold: {item.count} / {item.capacity}</Text>
          </div>
      </List.Item>
    )}
  />
  );

}

export default EventAdminTicketTypeList;
