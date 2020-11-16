import { Button, Form, Input, Row, Col } from 'antd';
import React from 'react';
import { sendCreateTaskPost } from '../../../../../core/event/Tasks/api';
import '../../../../styles/components/tasks.scss'

export default class TaskForm extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            title :  '',
            status : 'To Do',
            eventId :  '',
            error : ''
        }

    }

    onChangeTitle = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}))
    }

    onSuccess = ({data}) =>{
      this.props.onSubmit({
        name : this.state.title,
        status : data.status,
        assignedMembers : data.assignedMembers,
        id : data.id,
        eventId : data.eventId
    })
    }

  
    onSubmit = (e) => {
        e.preventDefault();
        
          if(this.state.title){
            sendCreateTaskPost({Name : this.state.title, EventId : 2, Order : 0, Status : 1})
            .then(this.onSuccess)
            
          }
          else{
              this.setState(() => ({error : 'Please enter a title '}))
          }
    }

    render() {
        const layout = {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 10,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 1,
              span: 8,
            },
          };
        return (
           
                <Form
                    name="basic"
                    onSubmitCapture={this.onSubmit}
                    className="center-form"
                    >
                   <Row> 
                   <Col span={18} offset={1}><Form.Item
                   label="Title"
                   name="Title"
                   rules={[{ required: true, message: this.state.error }]}
               >
                   <Input type='text'
                   placeholder="My task"
                   value={this.state.title}
                   onChange={this.onChangeTitle}
                   className="get-border-radius get-shadow"
                   />
                   
                  </Form.Item></Col>
                  <Col offset={1}><Form.Item>
                  <Button className="Task-Button-Style" type="primary" htmlType="submit">
                  Submit
                  </Button>
                </Form.Item></Col>
                  </Row>
                   
                    </Form>
                
        )
    }
}
