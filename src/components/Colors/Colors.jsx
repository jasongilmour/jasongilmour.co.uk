import React from 'react';
import styles from './Colors.module.scss';

const Colors = () => {
    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/img/noise.png`} alt="" role="presentation" className={styles.noise} />
            <div className={styles.colors}>
                <div className={styles.centreColor} />
                <div className={styles.topLeftColor} />
                <div className={styles.topRightColor} />
                <div className={styles.bottomLeftColor} />
                <div className={styles.bottomRightColor} />
            </div>
        </>
    );
};

export default Colors;
