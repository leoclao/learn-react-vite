/**
 * The ListItem function is a React component that renders a list item with optional className and id
 * props, and displays the children passed to it.
 * @param {Props}  - The `ListItem` component takes in three props:
 * @returns The ListItem component is being returned, which is a list item element (<li>) with the
 * specified id, className, and children elements.
 */
interface Props {
  className?: string;
  id?: string;
  children: React.ReactElement;
}

function ListItem({ className, id, children }: Props) {

  return (
    <li key={id} id={id} className={className}>
      {children}
    </li>
  );
}

export default ListItem;
