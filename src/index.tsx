/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import { I18nProvider } from '@i18n-pro/solid';
import zh from './locales/zh.json';
import en from './locales/en.json';

const root = document.getElementById('root');

render(
    () => (
        <I18nProvider
            namespace="i18n-example"
            locale="zh"
            langs={{
                zh,
                en,
            }}>
            <App />
        </I18nProvider>
    ),
    root!
);
