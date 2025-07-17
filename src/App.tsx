import React from 'react';
import { OrderTrackingCard } from './components/OrderTrackingCard';
import { LotteryOrder } from './types/lottery';
import './App.css';

// Sample data - in a real app this would come from props or API
const sampleOrders: LotteryOrder[] = [
  {
    id: 'DS78DL',
    lotteryName: 'Mega Millions',
    orderDate: '2024-05-02',
    totalAmount: 8.00,
    numberOfPlays: 4,
    status: {
      stage: 'received',
      message: 'Order received',
      progress: 33
    }
  },
  {
    id: 'AB12CD',
    lotteryName: 'Powerball',
    orderDate: '2024-05-01',
    totalAmount: 12.00,
    numberOfPlays: 6,
    status: {
      stage: 'ready_to_view',
      message: 'Tickets ready to view',
      progress: 66
    }
  },
  {
    id: 'XY99ZW',
    lotteryName: 'Mega Millions',
    orderDate: '2024-04-30',
    totalAmount: 4.00,
    numberOfPlays: 2,
    status: {
      stage: 'getting_results',
      message: 'Getting drawing results...',
      progress: 90
    }
  }
];

function App() {
  const handleDetailsClick = (orderId: string) => {
    console.log('Details clicked for order:', orderId);
    // Navigate to details page or show modal
  };

  const handlePlayMoreClick = () => {
    console.log('Play More clicked');
    // Navigate to new order flow
  };

  return (
    <div className="app">
      <h1 className="app-title">Order Status</h1>
      {sampleOrders.map((order) => (
        <OrderTrackingCard
          key={order.id}
          order={order}
          onDetailsClick={() => handleDetailsClick(order.id)}
          onPlayMoreClick={handlePlayMoreClick}
        />
      ))}
    </div>
  );
}

export default App; 