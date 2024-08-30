export interface compProps {
	className?: string;
	customStyle: string;
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
