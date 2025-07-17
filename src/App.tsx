import React from 'react';
import { OrderTrackingCard } from './components/OrderTrackingCard';
import { LotteryOrder } from './types/lottery';
import './App.css';

// Sample data showing progression of a single Mega Millions order
const sampleOrder: LotteryOrder = {
  id: 'DS78DL',
  lotteryName: 'Mega Millions',
  orderDate: '2024-05-02',
  totalAmount: 8.00,
  numberOfPlays: 4,
  status: {
    stage: 'getting_results',
    message: 'Getting drawing results...',
    progress: 90
  }
};

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
      <OrderTrackingCard
        order={sampleOrder}
        onDetailsClick={() => handleDetailsClick(sampleOrder.id)}
        onPlayMoreClick={handlePlayMoreClick}
      />
    </div>
  );
}

export default App; 