import {
  notification
} from 'antd';



const openNotificationWithIcon = (props) => {
  notification[props.type]({
    key: "updatable",
    message: 'Please Confirm Your Email!',
    description: props.desc && 'Click here to redirect to login page.',
    duration: props.dur,
    closeIcon: <div></div>,
    onClick: () => {
      props.history.replace("/login");
      setTimeout(notification.destroy(), 0);
    },
    style: {
      cursor: "pointer"
    }
  });
};

export default openNotificationWithIcon;
