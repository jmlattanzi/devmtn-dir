import React from 'react'
import styles from '../styles/Header.module.scss'

const header = (props) => (
    <div className={styles.Container}>
        <div className={styles.logo}>
            <h3>Home</h3>
        </div>
        <div className={styles.devDir}>
            <h3>DevMountain Directory</h3>
        </div>
    </div>
)

export default header
