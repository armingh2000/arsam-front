import React, {useState} from "react";
import { Modal, Button } from 'antd';
import { deleteEventRequest } from "../../../../../../core/api/actions/EventActions";
import { DeleteOutlined } from '@ant-design/icons';

// const DeleteEventConfirmModal = ({eventId, dispatch, oem, olm, osm}) => {
const DeleteEventConfirmModal = ({eventId, dispatch}) => {
  const [state, setState] = useState(false);

  const showModal = () => {
    setState(true);
  };

  const hideModal = () => {
    setState(false);
  };

  const onOk = () => {
    // dispatch(deleteEventRequest({payload: {id: eventId, olm, osm, oem}}));
    dispatch(deleteEventRequest({payload: {id: eventId}}));
    hideModal();
  }

  return (<div>
    <Button onClick={showModal} style={{backgroundColor:"#f5222d", color:"white"}}>
      <DeleteOutlined/>
      Delete Event
    </Button>
    <Modal
      title="Confirm"
      visible={state}
      onOk={onOk}
      onCancel={hideModal}
      okText="Delete"
      cancelText="Cancel"
    >
      <p>Are you sure to Delete this event?</p>
    </Modal>
  </div>)

}

export default DeleteEventConfirmModal;
