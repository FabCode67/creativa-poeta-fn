import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEn = {
    home: 'Home',
    about: 'About',
    contact: 'Contact Us',
    services : 'Services',
    welcome: 'WELCOME TO CREATIVA POETA',
    home_content: 'We are a creative group of people who design influential brands and digital experiences.',
    start_a_project: 'START A PROJECT',
    more_about_us: 'MORE ABOUT US'
};

const translationFr = {
    home: 'Maison',
    about: 'À propos',
    contact: 'Contactez-nous',
    services : 'Prestations',
    welcome: 'BIENVENUE À CREATIVA POETA',
    home_content: 'Nous sommes un groupe créatif de personnes qui conçoivent des marques influentes et des expériences numériques.',
    start_a_project: 'DÉMARRER UN PROJET',
    more_about_us: 'PLUS À NOTRE SUJET'
}


i18n.use(initReactI18next).init({
    resources: {
      en: { translation: translationEn },
      fr: { translation: translationFr },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
  
  export default i18n;
  