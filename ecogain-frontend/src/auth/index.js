import {createAuthProvider} from 'react-token-auth';

export const [useAuth, authFetch, login, logout] =
createAuthProvider({
    accessTokenKey: 'token',
    onUpdateToken: (data) => fetch('http://localhost:5000/refresh', {
        method: 'POST',
        body: data.token
    })
    .then(r => r.json())
});