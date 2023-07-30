// pages/login.js

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn('credentials', { ...credentials, callbackUrl: '/' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                placeholder="email"
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button type="submit">Log in</button>
        </form>
    );
}
