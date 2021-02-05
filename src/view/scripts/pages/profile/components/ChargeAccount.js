import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import card from '../Image/credit-card-logos.jpg'
import { Radio, Row, Modal, message, Upload, Image, Tag} from 'antd';
import { chargeAccount } from '../../../../../core/api/actions/UserProfileActions';



const ChargeAccount = (props) => {
    
    const [value, setValue] = React.useState(5);
    const handleOk = () => {
        props.dispatch(chargeAccount(
            value,
            handleSuccess,
            props.handleOk()
      ))

    }
  
    const handleSuccess = () => {
      message.success('Your credit has been mounted successfully');
    }

    const handleCancel = () => {
        props.handleCancel();
    }
    const onChange = e => {
        setValue(e.target.value);
      };

    return(
        <div>
            <Modal
            visible={props.visible}
            onCancel={handleCancel}
            onOk={handleOk}
            title="Select the amount to charge your wallet">

            <Radio.Group onChange={onChange} value={value}>
                <Row style={{marginBottom:'15%'}}><Radio value={5}><Tag color='cyan' style={{fontSize:'20px'}}>$5.00</Tag></Radio></Row>
                <Row style={{marginBottom:'15%'}}><Radio value={10}><Tag color='cyan' style={{fontSize:'20px'}}>$10.00</Tag></Radio></Row>
                <Row style={{marginBottom:'15%'}}><Radio value={20}><Tag color='cyan' style={{fontSize:'20px'}}>$20.00</Tag></Radio></Row>
                <Row style={{marginBottom:'15%'}}><Radio value={50}><Tag color='cyan' style={{fontSize:'20px'}}>$50.00</Tag></Radio></Row>
            </Radio.Group>
            <Image src={card} height='80px' width='400px' style={{marginLeft:'8%'}}></Image>

            </Modal>
        </div>
    )
}


export default connect()(ChargeAccount)