import styles from './index.module.scss';

const Button = ({ text }) => {
    return <button className={styles.button}>{text}</button>;
};

export default Button;
