import type { AccountAdminItem } from "./account";

export type AuthState = {
  accessToken: string | null;
  account: AccountAdminItem | null;
  loading: boolean;

  clearState: () => void;
  setAccessToken: (accessToken: string) => void;
  setAccount: (account: AccountAdminItem) => void;
  logout: () => Promise<void>;
  fetchMe: () => Promise<void>;
  refresh: () => Promise<void>;
};
