import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HeroUIProvider } from '@heroui/react';
import './i18n';

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
        <React.StrictMode>
            <HeroUIProvider>
                <App />
            </HeroUIProvider>
        </React.StrictMode>
    );
}
