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
  status: string | null;
  description: string | null;
};
