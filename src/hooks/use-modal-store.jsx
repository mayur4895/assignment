 
import { create } from "zustand";

 
 

export const useModal = create((set) => ({
  type: "signinsignup",
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}));