import { useCallback, useEffect } from 'react'
import styles from './Toast.module.css'
import ProgressBar from '../ProgressBar/ProgressBar'

const Toast = ({ notificationList, position, setNotificationList, progress, setProgress, running, setRunning }) => {
  
  let interval = undefined;
  const removeNotification = useCallback(id => {
    const toastListItem = notificationList.filter(e => e.id !== id);
    setNotificationList(toastListItem);
  }, [notificationList, setNotificationList]);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prevState) => prevState + 1);
      }, 3000);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (notificationList.length) {
        removeNotification(notificationList[0]?.id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [notificationList, removeNotification]);

  return (
    <div className={`${styles.toastContainer} ${styles[position]}`}>
      {
        notificationList?.map((notification) => (
          <div
            className={`${styles.notificationBar} ${styles.toast} `}
            style={{ backgroundColor: notification?.backgroundColor }}
          >
            <div className={styles.toastContent} >
              <img src={notification?.img} className={styles.logo} width="30px" height="30px" />

              <div className={styles.notificationInfo}>
                <p className={styles.title}>{notification?.title}</p>
                <p className={styles.description}>{notification?.description}</p>
              </div>

              <button onClick={() => removeNotification(notification?.id)} className={styles.cancelButton}><strong>x</strong></button>
            </div>
            <ProgressBar progress="100" />
          </div>
        ))
      }
    </div>
  )
}

export default Toast