import styles from './index.module.scss';

type MessageProps = {
    text: string;
    color: string;
};

const Message = ({ text, color }: MessageProps) => {
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
