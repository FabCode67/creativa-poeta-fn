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
    more_about_us: 'MORE ABOUT US',
    hello_there: 'HELLO THERE',
    we_are_creativa_poeta: 'WE ARE CREATIVA POETA',
    about_us_content: 'Passionate about artistic expression and inspiring creation, we are a company of experienced designers, copywriters and web developers who offer you unique creative solutions. Our primary goal is to understand your needs in order to create exceptional results. With our approach of creativity and excellence, we capture attention and leave a lasting impression. Please contact us today to discuss your projects and find out how we can help you achieve your creative goals.',
    awards_received: 'Awards Received',
    happy_clients: 'Happy Clients',
    complited_projects: 'Complited Projects',
    our_services: 'Our Services',
    read_more: 'Read More',

};

const translationFr = {
    home: 'Maison',
    about: 'À propos',
    contact: 'Contactez-nous',
    services : 'Prestations',
    welcome: 'BIENVENUE À CREATIVA POETA',
    home_content: 'Nous sommes un groupe créatif de personnes qui conçoivent des marques influentes et des expériences numériques.',
    start_a_project: 'DÉMARRER UN PROJET',
    more_about_us: 'PLUS À NOTRE SUJET',
    hello_there: 'BONJOUR ICI',
    we_are_creativa_poeta: 'NOUS SOMMES CREATIVA POETA',
    about_us_content: "Passionnés par l'expression artistique et la création inspirante, nous sommes une entreprise de designers, rédacteurs et développeurs web expérimentés qui vous proposent des solutions créatives uniques. Notre objectif principal est de comprendre vos besoins afin de créer des résultats exceptionnels. Avec notre approche de créativité et d'excellence, nous captons l'attention et laissons une impression durable. Veuillez nous contacter dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à atteindre vos objectifs créatifs.",
    awards_received: 'Prix ​​reçus',
    cups_of_coffee: 'Tasses de café',
    happy_clients: 'Clients heureux',
    completed_projects: 'Projets terminés',
    our_services: 'Nos services',
    read_more: 'Lire la suite',
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
  