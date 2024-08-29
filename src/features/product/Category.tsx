interface CategoryProps {
  category: string;
  className?: string;
}


function Category({ category, className }: CategoryProps) {
	return <div className={className}>{category}</div>;
}

export default Category;
