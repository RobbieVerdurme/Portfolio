import Card from '@components/card/Card';
import Form from '@elements/form/Form';
import useLocalizedText from '@hooks/useLocalizedText';
import { HeroLayout } from '@templates/heroLayout/HeroLayout';

export default function ContactPage() {
  const { translate } = useLocalizedText();
  return (
    <HeroLayout>
      <Card alignRight={false}>
        <Card.Title>
          <h1 className="content-card-title">{translate<string>('contact.title')}</h1>
        </Card.Title>
        <Card.Body>
          <p>{translate<string>('contact.description')}</p>
          <Form action="https://formspree.io/xoqnokzd" method="POST">
            <Form.Group>
              <Form.Input label={translate<string>('contact.nameForm')} name="name" />
              <Form.Input label={translate<string>('contact.emailForm')} name="email" />
            </Form.Group>
            <Form.TextArea label={translate<string>('contact.messageForm')} name="message" />
            <Form.SubmitButton>{translate<string>('contact.sendFrom')}</Form.SubmitButton>
          </Form>
        </Card.Body>
      </Card>
    </HeroLayout>
  );
}
