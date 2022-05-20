import create from "zustand";

export interface MainLayoutStore {
  backgroundColor?: string;
  setBackgroundColor: (color?: string) => void;
}

const useMainLayoutStore = create<MainLayoutStore>((set) => ({
  setBackgroundColor: (color) => set({ backgroundColor: color }),
}));

export default useMainLayoutStore;
