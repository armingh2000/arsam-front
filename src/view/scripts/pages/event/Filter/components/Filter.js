import React from 'react'
import { connect } from 'react-redux'
import { Card, Form, Input, Button, Select, DatePicker, InputNumber, Switch,} from 'antd';
import { sendFilterRequest } from '../../../../../../core/api/actions/FilterActions';
import { getEventsList, setFiltering, resetFilteredEvents, addFilterPageNumber } from '../../../../../../core/api/actions/FilterActions';

const {Option} = Select



class FilterPage extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            name: null,
            categories: null,
            membersCountMin: null,
            membersCountMax: null,
            isProject: null,
            isPrivate: false,
            dateMin: null,
            dateMax: null,
            pageNumber : 1,
            pageSize: 15
        }

        window.FP = this;
    }

    OnchangeName = (e) => {
        const name = e.target.value;
        this.setState(() => ({name: name}))
    }

    onChangeCategories = (e) => {
        const categories = e;
        this.setState(() => ({categories : categories}))
    }

   

    onChangeProject = (e) => {
        if(e == "project"){
            this.setState(() => ({isProject : true}))
        } else if(e == "normal"){
            this.setState(() => ({isProject : false}))
        } else{
            this.setState(() => ({isProject : null}))
        }
    }

    onChangeDateMin = (e) => {
        const dateMin = e
        this.setState(() => ({dateMin : dateMin}))
    }

    onChangeDateMax = (e) => {
        const dateMax = e
        this.setState(() => ({dateMax : dateMax}))
    }

    onChaneMemberCountMin = (e) => {
        this.setState(() => ({membersCountMin : e}))
    }

    onChangeMemberCountMax = (e) => {
        this.setState(() => ({membersCountMax : e}))
    }

    onSuccess = ({data}) => {
        this.props.dispatch(setFiltering(this.state));
        this.props.dispatch(getEventsList(data));
    }

    getBody = () => {
      return {
          Name: this.state.name == "" ? this.setState(() => ({name: null})): this.state.name,
          DateMin: this.state.dateMin,
          DateMax: this.state.dateMax,
          IsPrivate:this.state.isPrivate,
          IsProject: this.state.isProject,
          MembersCountMin: this.state.membersCountMin,
          MembersCountMax: this.state.membersCountMax,
          Categories: this.state.categories,
          PageNumber: this.state.pageNumber,
          PageSize: this.state.pageSize
      }
    }

    Filter = (e) => {
        console.log("..................................................");
        e.preventDefault();
        this.state.pageNumber = 1;

        // console.log(`page:${this.pageNumber}`);
        this.props.dispatch(resetFilteredEvents());
        console.log("------this.state---------(Filter.js)",this.state);
        const body = this.getBody();

        this.props.dispatch(sendFilterRequest(body,true,true));
        // this.props.dispatch(resetFilteredEvents());
        this.props.dispatch(addFilterPageNumber());



    }

    render(){
        return(
            <Card
            id="components-filter">
                <Form
                className="box input-container"
                layout="horizontal"
                onSubmitCapture={this.Filter}>

                    <Form.Item label="Name"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}
                    >
                    <Input type="text"
                        className="get-shadow"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.OnchangeName}/>
                    </Form.Item>

                    <Form.Item label="Categories"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}>
                    <Select
                    className="get-shadow"
                    mode="multiple"
                    onChange={this.onChangeCategories}
                    >
                        <Option value={1}>Race</Option>,
                        <Option value={2}>Performance</Option>,
                        <Option value={4}>Conference</Option>,
                        <Option value={8}>Fundraiser</Option>,
                        <Option value={16}>Festival</Option>,
                        <Option value={32}>Social Event</Option>
                    </Select>

                    </Form.Item>
                    <Form.Item label="Minimum Member"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}>
                        <InputNumber
                        className="get-shadow handel-width"
                        min={0}
                        value={this.state.membersCountMin}
                        onChange={this.onChaneMemberCountMin}/>
                    </Form.Item>

                    <Form.Item label="Maximum Member"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}>
                        <InputNumber
                        min={0}
                        className="get-shadow handel-width"
                        value={this.state.membersCountMax}
                        onChange={this.onChangeMemberCountMax}
                        />
                    </Form.Item>

                    <Form.Item label="Project Type"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}>
                        <Select
                        className="get-shadow"
                        defaultValue="all" onSelect={this.onChangeProject}
                        >
                            <Option value="project">Project</Option>
                            <Option value="normal">Normal</Option>
                            <Option value="all">All</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Start Date"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}>
                        <DatePicker
                        className="get-shadow handel-width"
                        value={this.state.dateMin}
                        onChange={this.onChangeDateMin}/>
                    </Form.Item>

                    <Form.Item label="End Date"
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}>
                        <DatePicker
                        className="get-shadow handel-width"
                        value={this.state.dateMax}
                        onChange={this.onChangeDateMax}/>
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{span:4}}
                    >
                        <Button
                        className="button"
                        type="primary"
                        htmlType="submit">Filter</Button>
                    </Form.Item>

                </Form>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.event.filter,
        filteredEvents: state.event.filteredEvents
    }
}

export default connect(mapStateToProps)(FilterPage)
