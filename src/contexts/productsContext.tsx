import {
  createContext, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import storageAlias from '../config/storageConfig';
import { api } from '../services/api';
import { endpoints } from '../services/endpoints';

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

interface UpdateProductAmount {
    productId: string;
    amount: number;
}

export interface IProductsContext {
    getListProducts: () => void;
    addProductOnCart: (productId: string) => void;
    removeProductOfCart: (productId: string) => void;
    updateCartProducts: (arg: UpdateProductAmount) => void;
    quantityTotalProducts: () => number;
    products: IProduct[];
    cart: IProduct[];
}

interface IProductsProvider {
    children: ReactNode;
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider: React.FC<IProductsProvider> = ({ children }) => {
  const [products, setProducts] = useState([] as IProduct[]);
  const [cart, setCart] = useState<IProduct[]>(() => {
    const storagedCart = localStorage.getItem(storageAlias.cart);
    if (storagedCart) {
      const parsedStoragedCart = JSON.parse(storagedCart);
      return parsedStoragedCart;
    }

    return [];
  });

  useEffect(() => {
    const stateString = JSON.stringify(cart);
    localStorage.setItem(storageAlias.cart, stateString);
  }, [cart]);

  const getListProducts = async () => {
    const { data } = await api.get(endpoints.getProducts);
    setProducts(data);
  };

  const quantityTotalProducts = (): number => {
    const allIdsProducts = cart.map((product) => product.id);
    const allUniqueIds = [...new Set(allIdsProducts)];
    return allUniqueIds.length;
  };

  const addProductOnCart = useCallback(
    async (productId: string) => {
      try {
        const { data: product }: { data: IProduct } = await api.get(
          endpoints.getProductById(`${productId}`),
        );

        const productExist = cart.filter((cartUser) => cartUser.id === productId);
        let updatedCart: IProduct[] = [];
        if (productExist && productExist.length > 0) {
          // eslint-disable-next-line max-len
          updatedCart = cart.map((item) => (item.id === productId ? { ...item, amount: item.amount + 1 } : item));
        } else {
          updatedCart = [...cart, { ...product, amount: 1 }];
        }
        setCart(updatedCart);
      } catch (err) {
        toast.error('Erro na adição do produto');
      }
    },
    [cart, setCart],
  );

  const removeProductOfCart = (productId: string) => {
    try {
      const productExists = cart.filter((userCart) => userCart.id === productId);
      if (productExists.length === 0) {
        throw new Error('Produto não encontrado no carrinho');
      }
      const updatedCart = cart.filter((cartProduct) => cartProduct.id !== productId);
      setCart(updatedCart);
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateCartProducts = async ({ productId, amount }: UpdateProductAmount) => {
    try {
      if (amount !== 0) {
        // eslint-disable-next-line max-len
        const updatedCart = cart.map((item) => (item.id === productId ? { ...item, amount } : item));
        setCart(updatedCart);
      } else {
        removeProductOfCart(productId);
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        getListProducts,
        products,
        cart,
        addProductOnCart,
        removeProductOfCart,
        updateCartProducts,
        quantityTotalProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
