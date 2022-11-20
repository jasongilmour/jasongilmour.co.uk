import React from 'react';
import styles from './Grid.module.scss';

const Grid = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.horizontal}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
            <div className={styles.vertical}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
        </div>
    );
};

export default Grid;
