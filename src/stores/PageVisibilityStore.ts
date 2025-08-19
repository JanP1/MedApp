import { create } from "zustand";

type Page = "home" | "settings" | "form" | "hidden";

interface UIState {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const useUIStore = create<UIState>((set) => ({
  currentPage: "home",
  setPage: (page) => set({ currentPage: page }),
}));
