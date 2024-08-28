/**
 * Renders a category component with the provided category name and class name.
 *
 * @param {string} category - The name of the category to display.
 * @param {string} className - The class name to apply to the category component.
 * @returns {JSX.Element} React element representing the category component.
 */
function Category({ category, className }) {
	return <div className={className}>{category}</div>;
}

export default Category;
