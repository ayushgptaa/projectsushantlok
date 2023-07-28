import React from 'react';
import styles from './index.module.scss';

const Select = ({ label, name, options, value, onChange }) => {
    return (
        <div className={styles.selectContainer}>
            <label htmlFor={name} required>
                {label}
            </label>
            <select value={value} onChange={onChange} name={name} id={name} className={styles.select} required>
                <option value="" disabled selected className={styles.option}>
                    Select option
                </option>

                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                        className={styles.option}
                        disabled={option?.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
