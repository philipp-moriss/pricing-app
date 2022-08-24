import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from '../i18n/locales/en/translation.json';
import translationRU from '../i18n/locales/ru/translation.json';

const resources = {
	EN: {
		translation: translationEN,
	},
	RU: {
		translation: translationRU,
	},
};

i18n
	// Enables the i18next backend
	.use(Backend)
	// Enable automatic language detection
	.use(LanguageDetector)
	// Enables the hook initialization module
	.use(initReactI18next)
	.init({
		// Standard language used
		fallbackLng: 'EN',
		debug: true,
		//Detects and caches a cookie from the language provided
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
		resources,
		lng: 'EN',
	});

export default i18n;
