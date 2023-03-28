import { createRoot } from 'react-dom'
import App from './App';
import React from 'react';
import { AuthContextProvider } from './contexts/AuthContext';

const root = createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>
    )