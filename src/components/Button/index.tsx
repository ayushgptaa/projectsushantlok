import styles from './index.module.scss';

type ButtonType = {
    text: string;
};

const Button = ({ text, ...rest }: ButtonType) => {
    return (
        <button className={styles.button} type="submit" {...rest}>
            {text}
        </button>
    );
};

export default Button;
