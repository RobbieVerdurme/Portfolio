import './Photos.tsx.css';

export default function Photos({ images }: { images: string[] }) {
  return (
    <div className="project-img-container">
      {images.map((image) => (
        <img className="project-img" src={`/${image}`} loading="lazy" />
      ))}
    </div>
  );
}
