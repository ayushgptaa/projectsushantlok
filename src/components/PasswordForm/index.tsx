import Input from '../Input';
import Button from '../Button';

import styles from './index.module.scss';

type PasswordFormType = {
    password: string;
    inputHandler: any;
    formHandler: any;
};

const PasswordForm = ({ password, inputHandler, formHandler }: PasswordFormType) => {
    return (
        <form onSubmit={formHandler}>
            <Input
                label="Enter Password"
                name="password"
                type="password"
                value={password}
                inputHandler={inputHandler}
            />

            <div style={{ marginTop: '50px', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Button text="Submit" />
            </div>
        </form>
    );
};

export default PasswordForm;
