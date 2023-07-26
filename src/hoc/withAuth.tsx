'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function withAuth(Component: any) {
    return function ProtectedRoute({ ...props }: any) {
        const router = useRouter();

        const password = typeof window !== 'undefined' && localStorage.getItem('password');
        const userIsAuthenticated = password !== null || '';

        useEffect(() => {
            if (!userIsAuthenticated) {
                router.push('/');
            }
        }, [userIsAuthenticated, router]);

        return userIsAuthenticated && <Component {...props} />;
    };
}
