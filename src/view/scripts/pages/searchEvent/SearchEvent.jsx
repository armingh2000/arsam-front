import React from "react";
import SearchEventForm from "./components/SearchEventForm";
import {Row, Col} from 'antd';

const SearchEvent = () => {

  return <div id="search-event-component">
    <Row justify="center" align="middle">
      <Col span={22}><SearchEventForm /></Col>
    </Row>
  </div>
}

export default SearchEvent;
