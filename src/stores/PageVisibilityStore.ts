import { create } from "zustand";

type Page = "home" | "settings" | "profile" | "hidden";

interface UIState {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const useUIStore = create<UIState>((set) => ({
  currentPage: "home",
  setPage: (page) => set({ currentPage: page }),
}));
