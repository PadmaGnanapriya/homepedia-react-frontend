import en from './EnglishWordSet.json';
import si from './SinhalaWordSet.json';

export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if (language === 'SI') {
        langData = si;
    } else {
        langData = en;
    }
    return langData[key];
}