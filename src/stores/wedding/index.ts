import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person.slice";
import { devtools } from "zustand/middleware";
import { createGuestSlice, GuestSlice } from "./guest.slice";

type ShareState = PersonSlice;

export const useWeddingBoundStore = create<ShareState & GuestSlice>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
  })),
);
