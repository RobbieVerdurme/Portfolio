import './IFrame.tsx.css';

interface IFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  variant?: 'small' | 'normal' | 'large';
}
export function IFrame({ variant = 'normal', ...props }: IFrameProps) {
  props.className = `iframe iframe-${variant} ${props.className ? props.className : ''}`;
  return <iframe {...props} frameBorder={0} />;
}
