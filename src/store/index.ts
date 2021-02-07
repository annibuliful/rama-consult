import { createStoreon, StoreonModule } from "storeon";
import { storeonDevtools } from "storeon/devtools";
import { useStoreon } from "storeon/react";
import { IUserInfo } from "../@types/IUser";

// State structure
interface State {
  userInfo: IUserInfo | null;
}

// Events declaration: map of event names to type of event data
interface Events {
  setUserInfo: IUserInfo;
}

const counterModule: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({ userInfo: null }));
  store.on("setUserInfo", (state, userInfo) => ({ ...state, userInfo }));
};

export const store = createStoreon<State, Events>([
  counterModule,
  process.env.NODE_ENV !== "production" && storeonDevtools,
]);

export const useStore = (keys: keyof State) => useStoreon<State, Events>(keys);
