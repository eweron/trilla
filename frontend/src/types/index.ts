export type User = {
  id?: number | null;
  username: string;
  email?: string | null;
  password?: string | null;
  roles?: Array<Record<number, string>> | null;
};

export type Counterparty = {
  id?: number | null;
  name: string | null;
  description: string | null;
  taxId: string | null;
  address: string | null;
  email: string | null;
  phone: string | null;
};

export type Order = {
  id?: number | null;
  number: number | string | null;
  seller: number | null;
  Seller?: Counterparty | null;
  customer: number | null;
  Customer?: Counterparty | null;
  supplier?: Counterparty | null;
  status: string | null;
  description: string | null;
  createdAt?: string;
  Invoices?: Invoice[] | null;
};

export type Purchase = {
  id?: number | null;
  number: number | string | null;
  supplier: number | null;
  customer: number | null;
  status: string | null;
  description: string | null;
  createdAt?: string;
};

export type Invoice = {
  id?: number | null;
  number: number | string | null;
  orderId?: number | null;
  Order?: Order | null;
  purchaseId?: number | null;
  currencyId: number | null;
  summ: number | null;
  createdAt?: string;
};

export type Currency = {
  id?: number | null;
  name: string;
}