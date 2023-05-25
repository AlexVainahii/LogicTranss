import { Container } from 'components/SharedLayout.styled';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeApi';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <div>
        <ProductList products={products} />
      </div>
    </main>
  );
};
