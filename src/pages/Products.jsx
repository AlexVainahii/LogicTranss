import { ProductList } from '../components/ProductList';
import { getShipments } from '../fakeApi';

export const Products = () => {
  const shipments = getShipments();
  return (
    <main>
      <div>
        <ProductList shipments={shipments} />
      </div>
    </main>
  );
};
