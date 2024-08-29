export interface compProps {
	className?: string;
	theme?: string;
	size?: string;
}

// types.ts or Product.ts
export interface Product {
	id: string;
	inStock: boolean;
	name: string;
	price: number;
	promotion?: number;
	category?: string;
}
