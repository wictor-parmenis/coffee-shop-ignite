export interface IProduct {
    id: string;
    title: string;
    description: string;
    img: string;
    price: number;
    amount: number;
}

export type IEssentialProduct = Omit<IProduct, 'price'>;
export interface IFormattedProduct extends IEssentialProduct {
    price: string;
}
