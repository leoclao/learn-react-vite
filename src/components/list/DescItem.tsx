/**
 * The DescItem function is a React component that renders a description list term and description.
 * @param {Props}  - The `DescItem` component takes in the following props:
 * @returns The `DescItem` function is returning a React fragment containing a definition term (`<dt>`)
 * element with the specified `id`, `className`, and `term` props, and a definition description
 * (`<dd>`) element with the `describes` prop.
 */
interface Props {
  className?: string;
  id?: string;
  term?: string;
  describes?: string;
}

function DescItem({ className, id, term, describes }: Props) {

  return (
    <>
      <dt key={id} id={id} className={className}>{term}</dt>
      <dd>{describes}</dd>
    </>
  );
}

export default DescItem;
