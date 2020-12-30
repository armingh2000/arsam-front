import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Radio, Row, Modal, message, Card, Col, Tag} from 'antd';
import { changeToPremium } from '../../../../../core/api/actions/UserProfileActions';

const ChangePremium = (props) => {
    
    const [value, setValue] = React.useState(-1);

    const handleOk = () => {
        if(value !== -1){
            props.dispatch(changeToPremium(
                value,
                handleSuccess,
                handleFail,
                props.handleOk()
            ))
        }else{
            props.handleOk();
        }
    }

    const handleFail = () => { 
        message.error('Not enough credit, please charge your account or choose another package')
    }
      
    const handleSuccess = () => {
      message.success('Your are now a premium user');
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
            title={props.user.premium ? "You are premium" : "Which one do you rather to choose"}>
            <p style={{fontSize:'20px', fontFamily:'initial', marginLeft:'1%', color:'navy'}}>All of these offers include creating unlimited events and also selling unlimited tickets for your events!</p>
            <Radio.Group className="info" onChange={onChange} value={value} size='large' style={{fontFamily:'initial'}}>
            <Row><Col span={11}>
            <Radio.Button value={1} style={{width:'112%', height:'90%', marginBottom: '10%'}}><h3>1 Month, with only 15$</h3>
            </Radio.Button>
            </Col>
            <Col span={11} offset={2}>
            <Radio.Button value={2} style={{width:'112%', height:'90%', marginBottom: '10%'}}>
            <h3>3 Months, with only 40$</h3>
            </Radio.Button></Col>
            </Row>
            <Row>
            <Col span={11}>
            <Radio.Button value={3} style={{width:'112%', height:'120%',}}>
            <h3>6 Months, with only 75$</h3>
            </Radio.Button></Col>
            <Col span={11} offset={2}>
            <Radio.Button value={4} style={{width:'112%', height:'120%',}}>
            <h3>1 Year, with only 140$</h3>
            </Radio.Button></Col></Row>
            
            </Radio.Group>
            {props.user.premium && 
                <h3 style={{marginTop:'5%', marginLeft:'1%' ,fontFamily:'initial'}}>Your premium package will be ended at {new Date(props.user.premium).toDateString()} {new Date(props.user.premium).getHours() + ":" + new Date(props.user.premium).getMinutes()}</h3>    
                }
            

            </Modal>
       
        </div>
    
    )
}


export default connect()(ChangePremium)
