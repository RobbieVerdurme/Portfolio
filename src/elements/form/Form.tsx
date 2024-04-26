import { generateGUID } from '@utils/Guid';
import { Button } from '@elements/button/Button';
import React from 'react';
import './Form.tsx.css';

function Form({ ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  props.className = `form ${props.className ? props.className : ''}`;
  return <form {...props}>{props.children}</form>;
}

Form.Group = ({ children }: { children: React.ReactNode }) => {
  return <div className="form-group">{children}</div>;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  key?: string;
  label?: string;
}

Form.Input = ({ key, label, ...props }: InputProps) => {
  key ??= generateGUID();
  props.className = `form-element-input ${props.className ? props.className : ''}`;
  return (
    <div className="form-element">
      <input id={key} {...props} required />
      <span className="bar"></span>
      {label && (
        <label className="form-element-label" htmlFor={key}>
          {label}
        </label>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  key?: string;
  label?: string;
}
Form.TextArea = ({ key, label, ...props }: TextAreaProps) => {
  key ??= generateGUID();
  props.className = `form-element-input ${props.className ? props.className : ''}`;
  return (
    <div className="form-element">
      <textarea id={key} {...props} required />
      <span className="bar"></span>
      {label && (
        <label className="form-element-label" htmlFor={key}>
          {label}
        </label>
      )}
    </div>
  );
};

Form.SubmitButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button type="submit" className="form-element form-element-button">
      {children}
    </Button>
  );
};

export default Form;
