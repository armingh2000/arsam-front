import React, {useState} from "react";
import { List, Avatar, Button, Skeleton, Typography } from 'antd';
import {
  ContainerTwoTone
} from '@ant-design/icons';
import TicketEditModal from "./TicketEditModal";
import TicketAddModal from "./TicketAddModal";
import { deleteTicketType } from "../../../../../../core/api/actions/EventActions";



const EventAdminTicketTypeList = ({ticketTypes, dispatch, eventId}) =>
{
  const { Text } = Typography;

  function deleteType (ticket) {
    console.log(ticket);
    dispatch(deleteTicketType({payload: {id: ticket.id}}));
  }

  return ( <div>
            <List
            itemLayout="horizontal"
            dataSource={ticketTypes}
            renderItem={item => (
              <List.Item actions={[<TicketEditModal dispatch={dispatch} ticket={item}/>, <Button type="primary" onClick={() => deleteType(item)}>delete</Button>]}>
                  <List.Item.Meta
                    avatar={<ContainerTwoTone twoToneColor="#006d75" />}
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
        <TicketAddModal eventId={eventId} dispatch={dispatch}/>
        </div>
  );

}

export default EventAdminTicketTypeList;
