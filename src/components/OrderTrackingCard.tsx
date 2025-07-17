import React from 'react';
import { OrderTrackingCardProps } from '../types/lottery';
import './OrderTrackingCard.css';

export const OrderTrackingCard: React.FC<OrderTrackingCardProps> = ({
  order,
  onDetailsClick,
  onPlayMoreClick
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getProgressSegments = () => {
    const totalSegments = 3;
    const activeSegments = Math.ceil((order.status.progress / 100) * totalSegments);
    
    return Array.from({ length: totalSegments }, (_, index) => (
      <div 
        key={index}
        className={`progress-segment ${index < activeSegments ? 'active' : ''}`}
      />
    ));
  };

  const getStatusIcon = () => {
    switch (order.status.stage) {
      case 'received':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#1976D2"/>
            <path 
              d="M3.5 6L5.5 8L8.5 4.5" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'ready_to_view':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
            <g clipPath="url(#clip0_79_21014)">
              <path d="M6.99988 0.75C5.03599 0.75 3.46342 1.6125 2.31863 2.63906C1.18113 3.65625 0.420367 4.875 0.0606445 5.71172C-0.0195638 5.89687 -0.0195638 6.10312 0.0606445 6.28828C0.420367 7.125 1.18113 8.34375 2.31863 9.36094C3.46342 10.3875 5.03599 11.25 6.99988 11.25C8.96377 11.25 10.5363 10.3875 11.6811 9.36094C12.8186 8.34141 13.5794 7.125 13.9415 6.28828C14.0218 6.10312 14.0218 5.89687 13.9415 5.71172C13.5794 4.875 12.8186 3.65625 11.6811 2.63906C10.5363 1.6125 8.96377 0.75 6.99988 0.75ZM3.49988 6C3.49988 5.10489 3.86863 4.24645 4.52501 3.61351C5.18138 2.98058 6.07162 2.625 6.99988 2.625C7.92814 2.625 8.81838 2.98058 9.47475 3.61351C10.1311 4.24645 10.4999 5.10489 10.4999 6C10.4999 6.89511 10.1311 7.75355 9.47475 8.38649C8.81838 9.01942 7.92814 9.375 6.99988 9.375C6.07162 9.375 5.18138 9.01942 4.52501 8.38649C3.86863 7.75355 3.49988 6.89511 3.49988 6ZM6.99988 4.5C6.99988 5.32734 6.30231 6 5.44433 6C5.27176 6 5.10648 5.97187 4.95092 5.92266C4.81724 5.88047 4.66169 5.96016 4.66655 6.09609C4.67384 6.25781 4.69814 6.41953 4.74433 6.58125C5.07731 7.78125 6.35821 8.49375 7.60266 8.17266C8.8471 7.85156 9.58599 6.61641 9.25301 5.41641C8.98321 4.44375 8.0912 3.78984 7.09953 3.75C6.95856 3.74531 6.87592 3.89297 6.91967 4.02422C6.97071 4.17422 6.99988 4.33359 6.99988 4.5Z" fill="#1976D2"/>
            </g>
            <defs>
              <clipPath id="clip0_79_21014">
                <rect width="14" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        );
      case 'getting_results':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.236 3.618L11 2.5L8.618 5.618L12 6L8.382 7.236L9.5 11L6.382 8.618L6 12L4.764 8.382L1 9.5L3.382 6.382L0 6L3.618 4.764L2.5 1L5.618 3.382L6 0Z" fill="#1976D2"/>
          </svg>
        );
      default:
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#1976D2"/>
            <path 
              d="M3.5 6L5.5 8L8.5 4.5" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div className="order-card">
      {/* Header */}
      <div className="card-header">
        <h3 className="lottery-name">{order.lotteryName}</h3>
        <div className="order-id">{order.id}</div>
      </div>
      
      {/* Order Details */}
      <div className="order-details">
        <div className="detail-row">
          <span className="label">Ordered:</span>
          <span className="value">{formatDate(order.orderDate)}</span>
        </div>
        <div className="detail-row">
          <span className="label">Total:</span>
          <span className="value">{formatCurrency(order.totalAmount)}</span>
          <span className="plays">({order.numberOfPlays} Plays)</span>
        </div>
      </div>
      
      {/* Status */}
      <div className="status-section">
        <div className="status-row">
          <div className="status-icon">
            {getStatusIcon()}
          </div>
          <span className="status-text">{order.status.message}</span>
        </div>
        <div className="progress-bar">
          {getProgressSegments()}
        </div>
      </div>
      
      {/* Actions */}
      <div className="action-buttons">
        <button 
          className="action-btn"
          onClick={onDetailsClick}
          type="button"
        >
          Details
        </button>
        <div className="button-divider"></div>
        <button 
          className="action-btn"
          onClick={onPlayMoreClick}
          type="button"
        >
          Play More
        </button>
      </div>
    </div>
  );
}; 