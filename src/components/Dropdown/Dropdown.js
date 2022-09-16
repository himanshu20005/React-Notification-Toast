import React from 'react'
import styles from './Dropdown.module.css'
const Dropdown = ({position, setPosition}) => {
    
    const handleSelect = (e) => {
        setPosition(e.target.value);
    }

    return (
        <select
            name="position"
            value={position}
            onChange={handleSelect}
            className={styles.positionDropdown}
        >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
        </select>
    )
}

export default Dropdown