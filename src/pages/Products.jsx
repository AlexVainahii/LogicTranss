import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeApi';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
