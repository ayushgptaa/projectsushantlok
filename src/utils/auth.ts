export function authenticate(password: string) {
    if (password === 'JATTRISKYAFTERWHISKEY') {
        typeof window !== 'undefined' && localStorage.setItem('password', password);
        return true;
    }
    return false;
}
