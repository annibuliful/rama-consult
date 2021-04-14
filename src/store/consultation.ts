import { StoreonModule } from "storeon";
import { IBasicInfoData } from "../@types/IConsultation";

const initialValue: IBasicInfoData = {
  physicianName: "",
  institutionName: "222@gmail.com",
  telephone: "",
  email: "",
  todayDate: new Date(),
};

export interface State {
  basicInfo: IBasicInfoData;
}

export interface Event {
  "consultation/saveBasicInfo": IBasicInfoData;
}
export const consultationModule: StoreonModule<State, Event> = (store) => {
  store.on("@init", () => ({ basicInfo: initialValue }));
  store.on("consultation/saveBasicInfo", (state, basicInfo) => ({
    ...state,
    basicInfo,
  }));
};
