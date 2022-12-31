export type User = {
  id?: number | null;
  username: string | null;
  email?: string | null;
  password?: string | null;
  roles?: Array<Record<number, string>> | null;
};
