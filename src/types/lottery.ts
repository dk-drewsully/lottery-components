export interface LotteryOrder {
  id: string;
  lotteryName: string;
  orderDate: string;
  totalAmount: number;
  numberOfPlays: number;
  status: OrderStatus;
  winAmount?: number;
}

export interface OrderStatus {
  stage: 'received' | 'ready_to_view' | 'getting_results' | 'won';
  message: string;
  progress: number; // 0-100
}

export interface OrderTrackingCardProps {
  order: LotteryOrder;
  onDetailsClick?: () => void;
  onPlayMoreClick?: () => void;
} 