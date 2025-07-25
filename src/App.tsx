import { useState } from 'react';
import { OrderTrackingCard } from './components/OrderTrackingCard';
import { LotteryOrder } from './types/lottery';
import './App.css';

// Sample data for different states
const baseOrder = {
  id: 'DS78DL',
  lotteryName: 'Mega Millions',
  orderDate: '2024-05-02',
  totalAmount: 8.00,
  numberOfPlays: 4,
};

const orderStates: Record<string, LotteryOrder> = {
  received: {
    ...baseOrder,
    status: {
      stage: 'received',
      message: 'Order received successfully',
      progress: 33
    }
  },
  ready_to_view: {
    ...baseOrder,
    status: {
      stage: 'ready_to_view',
      message: 'Results are ready to view',
      progress: 66
    }
  },
  getting_results: {
    ...baseOrder,
    status: {
      stage: 'getting_results',
      message: 'Getting drawing results...',
      progress: 100
    }
  },
  won: {
    ...baseOrder,
    status: {
      stage: 'won',
      message: 'Won!',
      progress: 100
    },
    winAmount: 2.00
  }
};

function App() {
  const [currentState, setCurrentState] = useState<'received' | 'ready_to_view' | 'getting_results' | 'won'>('received');

  const handleDetailsClick = (orderId: string) => {
    console.log('Details clicked for order:', orderId);
    // Navigate to details page or show modal
  };

  const handlePlayMoreClick = () => {
    console.log('Reorder clicked');
    // Navigate to reorder flow
  };

  return (
    <div className="app">
      <h1 className="app-title">Order Status - Component Demo</h1>
      
      {/* State Selector Buttons */}
      <div className="state-selector">
        <h2>View Different States:</h2>
        <div className="state-buttons">
          <button 
            className={currentState === 'received' ? 'active' : ''}
            onClick={() => setCurrentState('received')}
          >
            Order Received
          </button>
          <button 
            className={currentState === 'ready_to_view' ? 'active' : ''}
            onClick={() => setCurrentState('ready_to_view')}
          >
            Ready to View
          </button>
          <button 
            className={currentState === 'getting_results' ? 'active' : ''}
            onClick={() => setCurrentState('getting_results')}
          >
            Getting Results
          </button>
          <button 
            className={currentState === 'won' ? 'active' : ''}
            onClick={() => setCurrentState('won')}
          >
            Won
          </button>
        </div>
      </div>

      {/* Component Demo */}
      <OrderTrackingCard
        order={orderStates[currentState]}
        onDetailsClick={() => handleDetailsClick(orderStates[currentState].id)}
        onPlayMoreClick={handlePlayMoreClick}
      />
    </div>
  );
}

export default App; 