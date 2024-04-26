import { Loading } from '@components/loading/Loading';
import { useEffect, useState } from 'react';

interface LazyLoaderProps {
  delay?: number;
}

export default function LazyLoader({ delay = 250, ...props }: LazyLoaderProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return show ? <Loading {...props} /> : null;
}
