import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
  setSortOder: (sortOrder: string) => void;
  setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSortOder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
}));

export default useGameQueryStore;
