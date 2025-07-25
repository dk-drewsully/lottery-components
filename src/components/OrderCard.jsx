import React from 'react';
import '../styles/components.css';

const OrderCard = ({ orderNumber, status, progress }) => {
  return (
    <div className="order-card">
      <div className="card-header">
        <h2 className="lottery-name">Lottery Ticket</h2>
        <span className="order-id">{orderNumber}</span>
      </div>
      
      <div className="status-section">
        <div className="status-icon">
          {/* Add your status icon here */}
        </div>
        <div className="status-text">{status}</div>
        
        <div className="progress-bar">
          {/* Add progress bar implementation */}
        </div>
      </div>
    </div>
  );
};

export default OrderCard; 