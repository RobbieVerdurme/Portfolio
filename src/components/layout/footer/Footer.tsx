import { useMemo } from 'react';
import { Hyperlink } from '@elements/hyperlink/Hyperlink';
import useLocalizedText from '@hooks/useLocalizedText';
import List from '@elements/list/List';
import './Footer.tsx.css';

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const { supportedLanguages, changeLanguage } = useLocalizedText();

  return (
    <footer className="footer">
      <div className="footer-item supportedLanguages">
        <List direction="row">
          {supportedLanguages.map((lang) => (
            <List.Item key={lang}>
              <Hyperlink to={'#'} onClick={() => changeLanguage(lang)}>
                {lang}
              </Hyperlink>
            </List.Item>
          ))}
        </List>
      </div>
      <div className="footer-item copyright">
        &copy; {year}, made by{' '}
        <Hyperlink to={'https://github.com/RobbieVerdurme'} target="_blank">
          Robbie Verdurme
        </Hyperlink>
      </div>
    </footer>
  );
}
