import { ShipmentList } from '../components/ShipmentList';
import { getShipments } from '../fakeApi';

export const Shipments = () => {
  const shipments = getShipments();
  return (
    <main>
      <div>
        <ShipmentList shipments={shipments} />
      </div>
    </main>
  );
};
