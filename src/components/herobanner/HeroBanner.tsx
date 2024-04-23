import './HeroBanner.tsx.css';
interface HeroBannerDependencies {
  readonly children?: React.ReactNode;
  readonly backgroundImageUrl?: string;
  readonly bannerStyle?: 'small' | 'normal' | 'large';
}

export function HeroBanner({ backgroundImageUrl, bannerStyle, children }: HeroBannerDependencies) {
  const getBannerStyle = () => {
    switch (bannerStyle) {
      case 'large':
        return 'hero-banner-large';
      case 'small':
        return 'hero-banner-small';
    }
  };

  return (
    <div
      className={`hero-banner ${getBannerStyle()}`}
      style={{
        backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`,
      }}
    >
      {children && <div className="hero-content">{children}</div>}
    </div>
  );
}
