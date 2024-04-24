import React from 'react';
import './Card.tsx.css';

interface CardProps extends React.HtmlHTMLAttributes<HTMLElement> {
  centerText?: boolean;
  alignRight?: boolean;
}

function Card({ centerText = true, alignRight = true, ...props }: CardProps) {
  props.className = `card ${centerText && 'card-content-text-center'} ${
    alignRight && 'card-content-flex'
  } ${props.className ? props.className : ''}`;
  return <div {...props}>{props.children}</div>;
}
Card.Body = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  props.className = `card-content ${props.className ? props.className : ''}`;
  return <div {...props}>{props.children}</div>;
};
Card.Title = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  props.className = `card-title ${props.className ? props.className : ''}`;
  return <div {...props}>{props.children}</div>;
};
Card.Text = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  props.className = `card-text ${props.className ? props.className : ''}`;
  return <div {...props}>{props.children}</div>;
};
Card.Img = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  props.className = `card-img ${props.className ? props.className : ''}`;
  return (
    <div className="card-img-container">
      <img {...props} />
    </div>
  );
};
export default Card;
