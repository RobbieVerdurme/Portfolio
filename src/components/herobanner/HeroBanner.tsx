import './HeroBanner.tsx.css';
interface HeroBannerDependencies {
  readonly title?: string;
  readonly subtitle?: string;
  readonly backgroundImageUrl?: string;
  readonly bannerStyle?: 'small' | 'normal' | 'large';
}

export function HeroBanner({
  title,
  subtitle,
  backgroundImageUrl,
  bannerStyle,
}: HeroBannerDependencies) {
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
      <div className="hero-content">
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
