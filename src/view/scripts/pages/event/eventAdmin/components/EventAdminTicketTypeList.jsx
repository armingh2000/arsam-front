import React, {useState} from "react";
import { List, Avatar, Button, Skeleton, Typography } from 'antd';
import {
  ContainerTwoTone
} from '@ant-design/icons';
import TicketEditModal from "./TicketEditModal";
import TicketAddModal from "./TicketAddModal";


const EventAdminTicketTypeList = ({ticketTypes, dispatch, eventId}) =>
{
  const { Text } = Typography;

  return ( <div>
            <List
            itemLayout="horizontal"
            dataSource={ticketTypes}
            renderItem={item => (
              <List.Item actions={[<TicketEditModal dispatch={dispatch} ticket={item}/>, <Button type="primary">delete</Button>]}>
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
        <TicketAddModal eventId={eventId} dispatch={dispatch} />
        </div>
  );

}

export default EventAdminTicketTypeList;
