import './List.tsx.css';

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  direction?: 'row' | 'column';
}
function List({ direction = 'column', ...props }: ListProps) {
  props.className = `list list-${direction} ${props.className ? props.className : ''}`;
  return <ul {...props}>{props.children}</ul>;
}

List.Item = ({ ...props }: React.LiHTMLAttributes<HTMLLIElement>) => {
  props.className = `list-item ${props.className ? props.className : ''}`;
  return <li {...props}>{props.children}</li>;
};
export default List;
