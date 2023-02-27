import React from 'react'
import styles from '../pages/Home.module.css'

export default function FirstPost() {
    return (
        <div className={styles.blogPreview}>
            <h2 className={styles.blogTitle}>Coming Soon</h2>
            <p className={styles.blogContent}>...coming soon</p>
            <p className={styles.blogAuthor}></p>
        </div>
    )
}
