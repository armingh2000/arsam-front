import FilterPage from './components/Filter';
import SearchEventForm from "../../searchEvent/components/SearchEventForm";
import {Row, Col} from 'antd';
import moment from 'moment';
import { withRouter } from "react-router";
import { getEventsList, setFiltering } from '../../../../../core/api/actions/FilterActions';
import { connect } from "react-redux";


const ShowFilter = ({dispatch, match, filteredEvents}) =>{


    return(
      <div>

        <div id="filter-component">
          <Row justify="center" align="middle">
            <Col span={4} ><FilterPage/></Col>
            <Col span={20} id="search-event-component"><SearchEventForm dispatch={dispatch} events={filteredEvents}/></Col>
          </Row>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({ filteredEvents: state.event.filteredEvents });
const ShowTheLocationWithRouter = withRouter(ShowFilter);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
