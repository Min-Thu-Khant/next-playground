import { create } from "zustand";

type BearStore = {
    bear: number,
    tiger: number,
    increaseBear: () => void,
    increaseTiger: () => void
}
export const bearStore = create<BearStore>((set) => ({
    tiger: 0,
    bear: 0,
    increaseBear: () => set((state)=> ({ bear: state.bear + 1})),
    increaseTiger: () => set((state)=> ({ tiger: state.tiger + 1})),
}))