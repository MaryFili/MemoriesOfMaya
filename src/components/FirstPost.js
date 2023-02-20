import React from 'react'
import styles from './Home.module.css'

export default function FirstPost() {
    return (
        <div>
            <h2 className={styles.blogTitle}>What's the reason behind this blog</h2>
            <p className={styles.blogContent}>...coming soon</p>
            <p className={styles.blogAuthor}>Written by mary</p>
        </div>
    )
}
