import { OrderTrackingCard } from './components/OrderTrackingCard';
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="page-title">Order Status</h1>
      <OrderTrackingCard
        orderId="DS78DL"
        game="Mega Millions"
        date="12/27/2024"
        status="getting_results"
        onViewTickets={() => {}}
        onCheckResults={() => {}}
      />
    </div>
  )
}

export default App 