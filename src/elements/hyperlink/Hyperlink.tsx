import { Link, LinkProps } from 'react-router-dom';
import './Hyperlink.tsx.css';

export function Hyperlink({ ...props }: LinkProps) {
  props.className = `hyperlink ${props.className ? props.className : ''}`;
  return <Link {...props}>{props.children}</Link>;
}
