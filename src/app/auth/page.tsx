'use client';
import Message from '@/components/message';
import withAuth from '@/hoc/withAuth';

import styles from './index.module.scss';

function Auth() {
    return (
        <main className={styles.container}>
            <Message text="Access granted" color="#00ff19" />
        </main>
    );
}

export default withAuth(Auth);
