/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthState = {
  accessToken: string | null;
  account: any;
  loading: boolean;

  clearState: () => void;
  setAccessToken: (accessToken: string) => void;
  setAccount: (account: any) => void;
  logout: () => Promise<void>;
  fetchMe: () => Promise<void>;
  refresh: () => Promise<void>;
};
