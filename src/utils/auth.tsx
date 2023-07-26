export function authenticate(password: string) {
    if (password === '$3NDNUD35') {
        localStorage.setItem('password', JSON.stringify({ password }));
        return true;
    }
    return false;
}
