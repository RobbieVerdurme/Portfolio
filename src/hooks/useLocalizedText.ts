import { useTranslation } from 'react-i18next';

export default function useLocalizedText(): {
  currentLanguage: string;
  supportedLanguages: readonly string[];
  translate: <T extends string | object>(key: string) => T;
  changeLanguage: (newLanguage: string) => void;
} {
  const { t, i18n } = useTranslation();
  const translate = <T>(key: string) => t(key, { returnObjects: true }) as T;
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
