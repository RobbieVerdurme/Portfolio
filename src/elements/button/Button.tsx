import { NavLink } from 'react-router-dom';
import './Button.tsx.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: 'accent';
  relativePageUrl?: string;
}
export function Button({
  variant = 'accent',
  disabled = false,
  relativePageUrl,
  ...props
}: ButtonProps) {
  props.className = `button button-${variant} ${disabled ? 'button-disabled' : ''} ${
    props.className ? props.className : ''
  }`;
  return relativePageUrl ? (
    <NavLink to={relativePageUrl} {...props}>
      {props.children}
    </NavLink>
  ) : (
    <button {...props}>{props.children}</button>
  );
}
