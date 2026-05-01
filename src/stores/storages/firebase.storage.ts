import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseUrl = "https://zustand-d1b37-default-rtdb.firebaseio.com/zustand";

const firebaseApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then((resp) =>
        resp.json(),
      );
      return JSON.stringify(data);
    } catch (error) {
      throw error;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    const data = await fetch(`${firebaseUrl}/${name}.json`, {
      method: "PUT",
      body: value,
    }).then((resp) => resp.json());

    return;
  },
  removeItem: function (name: string): void {
    sessionStorage.removeItem(name);
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseApi);
