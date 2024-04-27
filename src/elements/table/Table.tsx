import './Table.tsx.css';

function Table({ ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  props.className = `table ${props.className ? props.className : ''}`;
  return (
    <table {...props}>
      <tbody>{props.children}</tbody>
    </table>
  );
}

Table.Row = ({ ...props }: React.ThHTMLAttributes<HTMLTableRowElement>) => {
  props.className = `table-row ${props.className ? props.className : ''}`;
  return <tr {...props}>{props.children}</tr>;
};

Table.Dimension = ({ ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => {
  props.className = `table-dimension ${props.className ? props.className : ''}`;
  return <td {...props}>{props.children}</td>;
};

export default Table;
