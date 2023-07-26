import styles from './index.module.scss';

type InputType = {
    label: string;
    name: string;
    type: string;
    value: any;
    inputHandler: any;
};

const Input = ({ label, name, type, value, inputHandler }: InputType) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            [
            <input
                id={name}
                name={name}
                type={type}
                autoComplete="off"
                className={styles.input}
                value={value}
                onChange={inputHandler}
            />
            ]
        </>
    );
};

export default Input;
