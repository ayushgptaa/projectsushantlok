import React, { useState } from 'react';

import styles from './index.module.scss';

const CustomCheckbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <label style={{ textAlign: 'center', maxWidth: '200px' }}>{label}</label>
            {/* <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className={styles.input} />
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={styles.input}
                disabled
            /> */}
        </>
    );
};

export default CustomCheckbox;
