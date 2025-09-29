import { create } from "zustand";

interface ScreenState {
  width: number;
  height: number;
  shouldWrap: boolean;
  setSize: (width: number, height: number) => void;
}

const useScreenStore = create<ScreenState>((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  shouldWrap: window.innerWidth < 768, // default
  setSize: (width, height) => set({ width, height, shouldWrap: width < 768 }),
}));

export default useScreenStore;
