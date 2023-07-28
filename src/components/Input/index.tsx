import styles from './index.module.scss';

type InputType = {
    label: string;
    name: string;
    type: string;
    value: any;
    inputHandler: any;
    secondarytext?: string;
};

const Input = ({ label, name, type, value, inputHandler, secondarytext }: InputType) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={name}>
                {label}
                <span style={{ color: 'red' }}>{secondarytext && `(${secondarytext})`}</span>
            </label>

            <div>
                <span>[</span>
                <input
                    required
                    id={name}
                    name={name}
                    type={type}
                    autoComplete="off"
                    className={styles.input}
                    value={value}
                    onChange={inputHandler}
                />
                <span>]</span>
            </div>
        </div>
    );
};

export default Input;
