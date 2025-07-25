import React from 'react';
import MoneyBagIcon from '../Icons/MoneyBagIcon';
import './LotteryCard.css';

/**
 * LotteryCard Component
 * Reference implementation for native mobile platforms
 * 
 * iOS Implementation:
 * - UIView (container)
 *   ├─ UIStackView (vertical)
 *   │  ├─ UIStackView (horizontal, header)
 *   │  │  ├─ UILabel (title)
 *   │  │  └─ UILabel (orderId)
 *   │  │
 *   │  └─ UIView (status section)
 *   │     ├─ UIImageView (status icon)
 *   │     ├─ UILabel (status text)
 *   │     └─ UIProgressView (custom)
 * 
 * Android Implementation:
 * - CardView or MaterialCard
 *   ├─ LinearLayout (vertical)
 *   │  ├─ LinearLayout (horizontal, header)
 *   │  │  ├─ TextView (title)
 *   │  │  └─ TextView (orderId)
 *   │  │
 *   │  └─ LinearLayout (status section)
 *   │     ├─ ImageView (status icon)
 *   │     ├─ TextView (status text)
 *   │     └─ ProgressBar (custom)
 * 
 * Jetpack Compose:
 * Card {
 *   Column {
 *     Row(header) {
 *       Text(title)
 *       Text(orderId)
 *     }
 *     Column(status) {
 *       Icon(status)
 *       Text(status)
 *       LinearProgressIndicator()
 *     }
 *   }
 * }
 * 
 * @param {Object} props
 * @param {string} props.orderId - Unique identifier for the lottery order
 * @param {string} props.status - Current status: 'won', 'lost', 'pending', 'checking'
 * @param {number} props.progress - Progress value (0-100)
 */
const LotteryCard = ({ orderId, status, progress }) => {
  const isWinning = status === 'won';
  
  const renderStatusIcon = () => {
    if (isWinning) {
      return (
        <MoneyBagIcon 
          size={16}
          color="#1B9E7A"
          className="lottery-card__icon"
        />
      );
    }
    
    // For other states, you can add different icons
    // e.g., loading spinner, X mark, etc.
    return null;
  };

  return (
    <div className="lottery-card">
      <div className="lottery-card__header">
        <h2 className="lottery-card__title">Lottery Ticket</h2>
        <span className="lottery-card__id">{orderId}</span>
      </div>
      
      <div className="lottery-card__status">
        <div className="lottery-card__status-icon">
          {renderStatusIcon()}
        </div>
        <div className={`lottery-card__status-text ${isWinning ? 'lottery-card__status-text--winning' : ''}`}>
          {status}
        </div>
        <div className="lottery-card__progress">
          {/* Progress bar implementation */}
        </div>
      </div>
    </div>
  );
};

export default LotteryCard; 