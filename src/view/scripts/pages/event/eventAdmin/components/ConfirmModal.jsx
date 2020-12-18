import React, {useState} from "react";
import { Modal, Button } from 'antd';
import { deleteTicketType } from "../../../../../../core/api/actions/EventActions";


const ConfirmModal = ({item, dispatch, oem, olm, osm}) => {
  const [state, setState] = useState(false);

  const showModal = () => {
    setState(true);
  };

  const hideModal = () => {
    setState(false);
  };

  const onOk = () => {
    dispatch(deleteTicketType({payload: {id: item.id, olm, osm, oem}}));
    hideModal();
  }

  return (<div>
    <Button onClick={showModal} style={{backgroundColor:"#f5222d", color:"white"}}>
      Delete
    </Button>
    <Modal
      title="Confirm"
      visible={state}
      onOk={onOk}
      onCancel={hideModal}
      okText="Delete"
      cancelText="Cancel"
    >
      <p>Are you sure?</p>
      <p>ticket type: {item.name}</p>
    </Modal>
  </div>)

}

export default ConfirmModal;
