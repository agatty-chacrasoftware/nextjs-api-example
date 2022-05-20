import create from 'zustand'

export interface AppStore {
  isFinishLoading?: boolean
  setIsFinishLoading: (isFinishLoading: boolean) => void
}

const useAppStore = create<AppStore>((set) => ({
  setIsFinishLoading: (isFinishLoading) => set({ isFinishLoading }),
}))

export default useAppStore
