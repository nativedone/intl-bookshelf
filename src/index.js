import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl'

// Languages to be used
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'

// Messages to be translated
import { flattenMessages } from './utils'
import messages from './messages'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Instantiate the addLocaleData
addLocaleData([...en, ...es, ...fr])

// Get the use's locale
const fallbackLanguage = 'en-US'
const preferedUserLanguage = navigator.languages[0]
let locale = 
    (navigator.languages && preferedUserLanguage)
    || navigator.language // if it doesn't support navigator.languages
    || navigator.userLanguage // usually internet explorer
    || fallbackLanguage

// Render a HoC component to provide translation to whole app
ReactDOM.render(
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
        <App />
    </IntlProvider>, 
    document.getElementById('root')
);

registerServiceWorker();
