import "./HeroBanner.tsx.css";
interface HeroBannerDependencies {
  readonly title: string;
  readonly subtitle: string;
  readonly backgroundImageUrl?: string;
  readonly fullScreen?: boolean;
}

export function HeroBanner({
  title,
  subtitle,
  backgroundImageUrl,
  fullScreen,
}: HeroBannerDependencies) {
  return (
    <div
      className={`hero-banner ${fullScreen && "hero-page-banner"}`}
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
