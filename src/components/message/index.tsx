import styles from './index.module.scss';

const Message = ({ text, color }) => {
    return (
        <div
            className={styles.container}
            style={{
                color,
                border: `1px solid ${color}`,
            }}>
            {text}
        </div>
    );
};

export default Message;
