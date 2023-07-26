import styles from './index.module.scss';

type ButtonType = {
    text: string;
};

const Button = ({ text }: ButtonType) => {
    return <button className={styles.button}>{text}</button>;
};

export default Button;
