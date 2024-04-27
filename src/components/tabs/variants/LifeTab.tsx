import useLocalizedText from '@hooks/useLocalizedText';

export default function LifeTab() {
  const { translate } = useLocalizedText();
  return (
    <p>
      {translate<string>('profile.primarySchool')}
      <br /> <br />
      {translate<string>('profile.highSchool')}
      <br />
      <br />
      {translate<string>('profile.future')}
    </p>
  );
}
