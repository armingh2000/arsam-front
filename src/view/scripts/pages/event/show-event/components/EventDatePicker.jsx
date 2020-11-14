import { DatePicker } from 'antd';
import moment from "moment";

const { RangePicker } = DatePicker;

const disabledDate = (date) =>
{
    return date < moment().startOf('day') ? true : false;
}

const EventDatePicker = (props) =>
{
    const onOk = (values) =>
    {
        props.form.setFieldsValue({dateTime:values});
    }

    return (<RangePicker
          defaultValue={props.currentDate}
          disabledDate={disabledDate}
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          onOk={onOk}
        />
    );
}
export default EventDatePicker;
