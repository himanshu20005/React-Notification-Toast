import { useState } from 'react';
import checkIcon from '../../assets/check.svg';
import errorIcon from '../../assets/error.svg';
import infoIcon from '../../assets/info.svg';
import warningIcon from '../../assets/warning.svg';
import Button from '../Button/Button'
import Toast from '../Toast/Toast'
import styles from './Homepage.module.css'
import Dropdown from '../Dropdown/Dropdown';

function Homepage() {
  const [notificationList, setNotificationList] = useState([]);
  const [position, setPosition] = useState('Choose Notification Position');
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [delayDuration, setDelayDuration] = useState()
  let toastProperties = null;

  const handleClick = (type) => {
    switch(type) {
      case 'success':
        toastProperties = {
          id: 1,
          title: 'Success',
          description: 'This is a success notification',
          backgroundColor: '#5cb85c',
          img: checkIcon
        }
        break;
      case 'error':
        toastProperties = {
          id: 2,
          title: 'Error',
          description: 'This is an error notification',
          backgroundColor: '#d9534f',
          img: errorIcon
        }
        break;
      case 'info':
        toastProperties = {
          id: 3,
          title: 'Info',
          description: 'This is an information notification',
          backgroundColor: '#5bc0de',
          img: infoIcon
        }
        break;
      case 'warning':
        toastProperties = {
          id: 4,
          title: 'Warning',
          description: 'This is a warning notification',
          backgroundColor: '#f0ad4e',
          img: warningIcon
        }
        break;
      default:
        toastProperties = [];
    }
    setRunning(false);
    setProgress(0);
    setNotificationList([...notificationList, toastProperties]);
  };

  const buttons = [
        <Button onClick={() => handleClick('success')} type="success">Success</Button>,
        <Button onClick={() => handleClick('error')} type="error">Error</Button>,
        <Button onClick={() => handleClick('info')} type="info">Info</Button>,
        <Button onClick={() => handleClick('warning')} type="warning">Warning</Button>
  ]
  
  const handleDelayChange = (e) => {
    setDelayDuration(e.target.value)
  }

  return (
    <div className={styles.rootContainer}>
      <h1 className={styles.heading}>React Notification Bar Application</h1>
      <div className={styles.mainContainer}>
      <p className={styles.label}>Add notification autoclose duration (in ms)</p>
      <input type="text" className={styles.durationTextfield} value={delayDuration} onChange={(e) => handleDelayChange(e)} placeholder="Example: 3000 ms"/>
      <div className={styles.buttonContainer}>
        {buttons}
      </div>
      <Dropdown position={position} setPosition={setPosition} />
      </div>
      <Toast notificationList={notificationList} position={position} delayDuration={delayDuration} setNotificationList={setNotificationList} progress={progress} setProgress={setProgress} running={running} setRunning={setRunning}/>
    </div>
  );
}

export default Homepage;