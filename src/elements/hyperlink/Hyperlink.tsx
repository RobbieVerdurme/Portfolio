import { Link, LinkProps } from 'react-router-dom';
import './Hyperlink.tsx.css';

export function Hyperlink({ ...props }: LinkProps) {
  return (
    <Link className={`hyperlink ${props.className ? props.className : ''}`} {...props}>
      {props.children}
    </Link>
  );
}
