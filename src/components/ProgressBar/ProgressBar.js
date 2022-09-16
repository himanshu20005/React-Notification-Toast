import React, { useState } from 'react'
import styles from './ProgressBar.module.css'
const ProgressBar = ({progress}) => {
    const [showProgress, setShowProgress] = useState({})
    setTimeout(() => {
        const updateProgress = {
            opacity:1,
            width: `${progress}%`,
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