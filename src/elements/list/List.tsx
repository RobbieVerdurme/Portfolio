import './List.tsx.css';

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  direction?: 'row' | 'column';
}
function List({ direction = 'column', ...props }: ListProps) {
  return (
    <ul className={`list list-${direction} ${props.className ? props.className : ''}`} {...props}>
      {props.children}
    </ul>
  );
}

List.Item = ({ ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={`list-item ${props.className ? props.className : ''}`}>{props.children}</li>
);
export default List;
