import React, { useState } from 'react'
import styles from './ProgressBar.module.css'
const ProgressBar = ({progress, delayDuration= 3000}) => {
    const [showProgress, setShowProgress] = useState({})
    setTimeout(() => {
        const updateProgress = {
            opacity:1,
            width: `${progress}%`,
            transition: `${delayDuration ? delayDuration : 3000}ms ease`
        }
        setShowProgress(updateProgress)
    }, 10)
  return (
    <div className={styles.progressBar}>
        <div className={styles.progressCompleted} style={showProgress}>
        </div>
    </div>
  )
}

export default ProgressBar