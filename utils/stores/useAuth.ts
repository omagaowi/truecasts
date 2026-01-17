// export const root_uri = `http://localhost:4000/api/v1`;
export const root_uri = `https://truecasts-api.vercel.app/api/v1`;

import { create } from "zustand";

export interface AuthStore {
  authToken: any;
  tokenError: boolean;
  setAuthToken: (authToken: string) => void;
  setTokenError: (authToken: boolean) => void;
}

export const useAuth = create<AuthStore>((set) => ({
  authToken: "",
  setAuthToken: (data: any) => set(() => ({ authToken: data })),
  tokenError: false,
  setTokenError: (data: any) => set(() => ({ tokenError: data })),
}));
