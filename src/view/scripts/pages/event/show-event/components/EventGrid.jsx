import React from "react";
import {
    Row,
    Col,
    Card} from "antd";
import EventImages from "./EventImages";
import EventDetails from "./EventDetails";
import { addTask, changeStatus } from '../../../../../../core/event/actions/taskActions'
import Tasks from '../../blocks/Tasks'
import TaskForm from '../../blocks/TaskForm'

import EventMembersList from "./EventMembersList";
import EventDescription from "./EventDescription";

const EventGrid = ({event, dispatch, eventId}) =>
{
  return (<div>
            <Card className="card">
              <Row justify="space-around" align="middle" gutter={[8,8]}>
                <Col xs={24} md={11}>
                    <EventImages images={event.images}/>
                </Col>
                <Col xs={24} md={9} className="details-col">
                  <EventDetails
                    name={event.name}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    creator={event.creator}
                    categories={event.categories}/>
                </Col>
              </Row>
              </Card>

            <Row justify="space-around" align="middle" gutter={[8,8]}>
              <Col xs={24} md={17}>
                <Card className="card">
                <div id="components-checkList">

                <Tasks/>
                <TaskForm
                onSubmit={(task) => {dispatch(addTask(task))}}
                onStatusChange={(task) => {dispatch(changeStatus(task.id, task))}}
                event={eventId}>
                </TaskForm>
                </div>
                </Card>
              </Col>
              <Col xs={24} md={5} style={{height:"100%"}}>
                <Card className="card">
                  <EventMembersList
                    members={event.eventMembers}
                    isLimitedMember={event.isLimitedMember}
                    maximumNumberOfMembers={event.maximumNumberOfMembers}
                    />
                </Card>
              </Col>
            </Row>
            <Card className="card">
              <EventDescription description={event.description}/>
            </Card>
          </div>
  );
}

export default EventGrid;
