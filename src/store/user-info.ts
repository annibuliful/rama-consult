import { StoreonModule } from "storeon";
import { IUserInfo } from "../@types/IUser";

export interface State {
  userInfo: IUserInfo | null;
}

export interface Event {
  setUserInfo: IUserInfo;
}

export const userInfoModule: StoreonModule<State, Event> = (store) => {
  store.on("@init", () => ({ userInfo: null }));
  store.on("setUserInfo", (state, userInfo) => ({ ...state, userInfo }));
};
