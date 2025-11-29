export type OrderItem = {
  fullName: string;
  id: string;
  note: string;
  orderCode: string;
  phone: string;
  subTotal: number;
  discount: number;
  total: number;
  items: {
    tourId: string;
    quantityAdult: number;
    quantityChildren: number;
    quantityBaby: number;
    priceNewAdult: number;
    priceNewChildren: number;
    priceNewBaby: number;
    avatar: string;
    name: string;
  }[];
  paymentMethodName: string;
  paymentStatusName: string;
  statusInfo: {
    label: string;
    value: string;
    color: string;
  };
  createdAtTime: string;
  createdAtDate: string;
};
