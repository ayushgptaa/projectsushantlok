'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function withAuth(Component: any) {
    return function ProtectedRoute({ ...props }) {
        const router = useRouter();
        const password = localStorage.getItem('password');
        const userIsAuthenticated = password !== null || '';

        useEffect(() => {
            if (!userIsAuthenticated) {
                router.push('/');
            }
        }, [userIsAuthenticated, router]);

        return userIsAuthenticated && <Component {...props} />;
    };
}
