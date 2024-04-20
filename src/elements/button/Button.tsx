import { NavLink } from 'react-router-dom';
import './Button.tsx.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: 'accent';
  relativePageUrl?: string;
}
export function Button({
  children,
  variant = 'accent',
  disabled,
  relativePageUrl,
  ...props
}: ButtonProps) {
  return relativePageUrl ? (
    <NavLink
      to={relativePageUrl}
      className={`button button-${variant} ${disabled && 'button-disabled'}`}
      {...props}
    >
      {children}
    </NavLink>
  ) : (
    <button className={`button button-${variant} ${disabled && 'button-disabled'}`} {...props}>
      {children}
    </button>
  );
}
