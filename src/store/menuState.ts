import { create } from 'zustand'

type MenuStateType = {
  currentPage: string
  setCurrentPage: (page: string) => void
}


export const useMenuState = create<MenuStateType>((set) => ({
  currentPage: "Home",
  setCurrentPage: (page: string) => set({ currentPage: page }),
}))