export type User = {
  id?: number | null;
  username: string;
  email?: string | null;
  password?: string | null;
  roles?: Array<Record<number, string>> | null;
};
