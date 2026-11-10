export type Stock = {
  name: string;
  price: number;
  percent: string;
  isDown: boolean;
};

export type Holding = {
  _id?: string;
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
  isLoss?: boolean;
};

export type Position = {
  _id?: string;
  product: string;
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
  isLoss?: boolean;
};

export type Order = {
  _id?: string;
  name: string;
  qty: number;
  price: number;
  mode: "BUY" | "SELL";
};