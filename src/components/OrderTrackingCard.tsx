import React from 'react';
import './OrderTrackingCard.css';

export interface OrderTrackingCardProps {
  orderId: string;
  game: string;
  date: string;
  status: 'order_received' | 'ready_to_view' | 'getting_results';
  onViewTickets: () => void;
  onCheckResults: () => void;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'order_received':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'ready_to_view':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      );
    case 'getting_results':
      return (
        <svg className="sparkle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L19 7L13.09 15.74L12 22L10.91 15.74L5 17L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'order_received':
      return 'Order received';
    case 'ready_to_view':
      return 'Tickets ready to view';
    case 'getting_results':
      return 'Getting drawing results...';
    default:
      return '';
  }
};

export const OrderTrackingCard: React.FC<OrderTrackingCardProps> = ({
  orderId,
  game,
  date,
  status,
  onViewTickets,
  onCheckResults: _onCheckResults
}) => {
  return (
    <div className="order-tracking-card">
      <div className="card-header">
        <div className="game-title">{game}</div>
        <div className="order-info">
          <span className="order-label">Ordered:</span>
          <span className="order-date">{date}</span>
        </div>
      </div>
      
      <div className="card-content">
        <div className="order-details">
          <div className="order-id">
            <span className="order-label">Order ID:</span>
            <span className="order-value">{orderId}</span>
          </div>
        </div>
        
        <div className="status-section">
          <div className="status-indicator">
            {getStatusIcon(status)}
            <span className="status-text">{getStatusText(status)}</span>
          </div>
          
          {status === 'order_received' && (
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          )}
          
          {status === 'ready_to_view' && (
            <button className="action-button" onClick={onViewTickets}>
              View Tickets
            </button>
          )}
          
          {status === 'getting_results' && (
            <div className="progress-bar">
              <div className="progress-fill shimmer"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 