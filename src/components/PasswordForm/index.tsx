import Input from '../Input';

import styles from './index.module.scss';

type PasswordFormType = {
    password: string;
    inputHandler: any;
    formHandler: any;
};

const PasswordForm = ({ password, inputHandler, formHandler }: PasswordFormType) => {
    return (
        <form onSubmit={formHandler}>
            <div className={styles.inputContainer}>
                <Input
                    label="Enter Password"
                    name="password"
                    type="password"
                    value={password}
                    inputHandler={inputHandler}
                />
            </div>
        </form>
    );
};

export default PasswordForm;