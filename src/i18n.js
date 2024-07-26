import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: ['en'],
        resources: {
            en: {
                translation: {
                    "github": "GitHub",
                    "ukrainian": "Українська",
                    "english": "English",
                    "contentNotFound": "## Content not found"
                }
            },
            ua: {
                translation: {
                    "github": "GitHub",
                    "ukrainian": "Українська",
                    "english": "English",
                    "contentNotFound": "## Вміст не знайдено"
                }
            }
        },
        debug: true,
        nonExplicitSupportedLngs: true
    });

export default i18n;
