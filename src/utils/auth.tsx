export function authenticate(password: string) {
    if (password === '$3NDNUD35') {
        typeof window !== 'undefined' && localStorage.setItem('password', JSON.stringify({ password }));
        return true;
    }
    return false;
}
