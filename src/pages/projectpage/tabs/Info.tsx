import useLocalizedText from '@hooks/useLocalizedText';
import './Info.tsx.css';
import Table from '@elements/table/Table';
import List from '@elements/list/List';
import { Hyperlink } from '@elements/hyperlink/Hyperlink';

export default function Info({
  creators,
  inventors,
  githubLink,
  programmingLanguage,
  IDE,
}: {
  creators: string;
  inventors: string;
  githubLink?: string[];
  programmingLanguage: string;
  IDE: string;
}) {
  const { translate } = useLocalizedText();
  return (
    <Table>
      {creators && (
        <Table.Row>
          <Table.Dimension>{translate<string>('projectdetail.Creators')}</Table.Dimension>
          <Table.Dimension>{creators}</Table.Dimension>
        </Table.Row>
      )}

      {inventors && (
        <Table.Row>
          <Table.Dimension>{translate<string>('projectdetail.Inventors')}</Table.Dimension>
          <Table.Dimension>{inventors}</Table.Dimension>
        </Table.Row>
      )}

      {githubLink && (
        <Table.Row>
          <Table.Dimension>Github Project Link</Table.Dimension>
          <Table.Dimension>
            {
              <List>
                {githubLink.map((x) => (
                  <List.Item key={x}>
                    <Hyperlink to={x}>{x}</Hyperlink>
                  </List.Item>
                ))}
              </List>
            }
          </Table.Dimension>
        </Table.Row>
      )}

      {programmingLanguage && (
        <Table.Row>
          <Table.Dimension>
            {translate<string>('projectdetail.programmingLanguage')}
          </Table.Dimension>
          <Table.Dimension>{programmingLanguage}</Table.Dimension>
        </Table.Row>
      )}
      {IDE && (
        <Table.Row>
          <Table.Dimension>IDE</Table.Dimension>
          <Table.Dimension>{IDE}</Table.Dimension>
        </Table.Row>
      )}
    </Table>
  );
}
