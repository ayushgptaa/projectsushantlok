import { useState, useEffect } from 'react';

import styles from './index.module.scss';

const Loader = ({ percentage }) => {
    return (
        <div className={styles.rootContainer}>
            <h3> &gt; Loading encryped files</h3>
            <div className={styles.loaderContainer}>
                <div className={styles.loader}>
                    <div className={styles.loaderBar} style={{ width: `${percentage}%` }} />
                </div>
                <div className={styles.percentageText}>{percentage}%</div>
            </div>
        </div>
    );
};

export default Loader;
