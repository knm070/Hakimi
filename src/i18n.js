// src/i18n.js
import { createI18n } from 'vue-i18n';

// Import translation files
import en from './locales/en.json';
import uz from './locales/uz.json';
import ru from './locales/ru.json';
import fa from './locales/fa.json';

const messages = {
  en,
  uz,
  ru,
  fa
};

const i18n = createI18n({
  locale: 'en', // default language
  fallbackLocale: 'en', // fallback language
  messages
});

export default i18n;
