import { useTranslation } from 'react-i18next';

export default function useLocalizedText(): {
  currentLanguage: string;
  supportedLanguages: readonly string[];
  translate: (key: string) => string;
  changeLanguage: (newLanguage: string) => void;
} {
  const { t, i18n } = useTranslation();
  const translate = (key: string) => t(key);
  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  return {
    currentLanguage: i18n.language,
    supportedLanguages:
      (i18n.options.supportedLngs as string[])?.filter((x) => x != 'cimode') || [], // cimode used for testing purposes
    translate,
    changeLanguage,
  };
}
