import React from 'react';

import styles from './index.module.scss';

const Input = ({ password, inputHandler, formHandler }) => {
    return (
        <form onSubmit={formHandler}>
            <div className={styles.inputContainer}>
                <label htmlFor="password">Enter Password</label>
                [
                <input
                    id="password"
                    type="password"
                    autoComplete="off"
                    className={styles.input}
                    value={password}
                    onChange={inputHandler}
                />
                ]
            </div>
        </form>
    );
};

export default Input;
