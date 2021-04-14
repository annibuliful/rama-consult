import { StoreonModule } from "storeon";
import { IBasicInfoData } from "../@types/IConsultation";

const initialValue: IBasicInfoData = {
  physicianName: "",
  institutionName: "",
  telephone: "",
  email: "",
  todayDate: "",
};

export interface State {
  basicInfo: IBasicInfoData | null;
}

export interface Event {
  saveBasicInfo: IBasicInfoData;
}
export const consultationModule: StoreonModule<State, Event> = (store) => {
  store.on("@init", () => ({ basicInfo: initialValue }));
  store.on("saveBasicInfo", (state, basicData) => ({ ...state, ...basicData }));
};
