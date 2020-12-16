import React, {useState} from "react";
import { List, Avatar, Button, Skeleton, Typography } from 'antd';
import {
  ContainerTwoTone
} from '@ant-design/icons';
import TicketEditModal from "./TicketEditModal";
import TicketAddModal from "./TicketAddModal";
import { deleteTicketType } from "../../../../../../core/api/actions/EventActions";



const EventAdminTicketTypeList = ({ticketTypes, dispatch, eventId, oem, olm, osm}) =>
{
  const { Text } = Typography;

  function deleteType (ticket) {
    dispatch(deleteTicketType({payload: {id: ticket.id, olm, osm, oem}}));
  }

  return ( <div>
            <List
            itemLayout="horizontal"
            dataSource={ticketTypes}
            renderItem={item => (
              <List.Item actions={[<TicketEditModal olm={olm} osm={osm} oem={osm} dispatch={dispatch} ticket={item}/>, <Button type="primary" onClick={() => deleteType(item)}>delete</Button>]}>
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
        <TicketAddModal olm={olm} osm={osm} oem={osm} eventId={eventId} dispatch={dispatch}/>
        </div>
  );

}

export default EventAdminTicketTypeList;
