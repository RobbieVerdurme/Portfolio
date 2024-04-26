import { useState } from 'react';
import './IFrame.tsx.css';
import { Loading } from '@components/loading/Loading';

interface IFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  variant?: 'small' | 'normal' | 'large';
}
export function IFrame({ variant = 'normal', ...props }: IFrameProps) {
  const [isLoading, SetIsLoading] = useState(true);

  props.className = `iframe iframe-${variant} ${props.className ? props.className : ''}`;
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <iframe
        {...props}
        frameBorder={0}
        style={{ opacity: isLoading ? '0' : '1' }}
        loading="lazy"
        onLoad={() => SetIsLoading(false)}
      />
    </>
  );
}
