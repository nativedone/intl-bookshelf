// This function comes directly from react-intl docummentation

export function flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
      let value = nestedMessages[key];
      let prefixedKey = prefix ? `${prefix}.${key}` : key;
  
      if (typeof value === 'string') {
        messages[prefixedKey] = value;
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }
  
      return messages;
    }, {});
  }


  // Get the use's locale
const fallbackLanguage = 'en-US'
const preferedUserLanguage = navigator.languages[0]
export const userLocale = () => (
  (navigator.languages && preferedUserLanguage)
  || navigator.language // if it doesn't support navigator.languages
  || navigator.userLanguage // usually internet explorer
  || fallbackLanguage
)
    