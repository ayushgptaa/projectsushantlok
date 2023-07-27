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
        <div className={styles.inputContainer}>
            <label htmlFor={name} style={{ textAlign: 'center', maxWidth: '200px' }}>
                {label}
            </label>
            <div>
                <span>[</span>
                <input
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
