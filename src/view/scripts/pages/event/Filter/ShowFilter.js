import FilterPage from './components/Filter';
import SearchEventForm from "../../searchEvent/components/SearchEventForm";
import {Row, Col} from 'antd';
import moment from 'moment';
import { withRouter } from "react-router";
import { getEventsList, setFiltering } from '../../../../../core/api/actions/FilterActions';
import { connect } from "react-redux";


const ShowFilter = ({dispatch, match, filteredEvents, shouldSendSearchRequest, loading, filter}) =>{


    return(
      <div id="not-scrollable">

        <div id="filter-component">
          <Row justify="center">
            <Col span={4} ><FilterPage/></Col>
            <Col span={20} id="search-event-component">
              <SearchEventForm
              shouldSendSearchRequest={shouldSendSearchRequest}
              dispatch={dispatch}
              events={filteredEvents}
              loading={loading}
              filter={filter}
              />
            </Col>
          </Row>
        </div>
      </div>
    )
}

const mapStateToProps = (state,filter) => (
  {
    filteredEvents: state.event.filteredEvents,
    shouldSendSearchRequest: state.event.shouldSendSearchRequest,
    loading:state.event.loading,
    filter:state.event.filter
  });
const ShowTheLocationWithRouter = withRouter(ShowFilter);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
