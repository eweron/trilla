export type User = {
  id?: number | null;
  username: string;
  email?: string | null;
  password?: string | null;
  roles?: Array<Record<number, string>> | null;
};

export type Counterparty = {
  id?: number | null;
  name: string;
};

export type Order = {
  id?: number | null;
  number: number | string;
};
