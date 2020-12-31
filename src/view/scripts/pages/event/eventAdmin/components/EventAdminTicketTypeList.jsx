import React, {useState} from "react";
import { List, Avatar, Button, Skeleton, Typography } from 'antd';
import {
  ContainerTwoTone
} from '@ant-design/icons';
import TicketEditModal from "./TicketEditModal";
import TicketAddModal from "./TicketAddModal";
import ConfirmModal from "./ConfirmModal";



const EventAdminTicketTypeList = ({ticketTypes, dispatch, eventId, oem, olm, osm}) =>
{
  const { Text } = Typography;

  return ( <div>
            <TicketAddModal olm={olm} osm={osm} oem={oem} eventId={eventId} dispatch={dispatch}/>
            <List
            header="Ticket Types"
            itemLayout="horizontal"
            dataSource={ticketTypes}
            renderItem={item => (
              <List.Item actions={[<TicketEditModal eventId={eventId} olm={olm} osm={osm} oem={oem} dispatch={dispatch} ticket={item}/>, <ConfirmModal item={item} olm={olm} osm={osm} oem={oem} dispatch={dispatch}/>]}>
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
        </div>
  );

}

export default EventAdminTicketTypeList;
