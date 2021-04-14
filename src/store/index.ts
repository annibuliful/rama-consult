import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";
import { useStoreon } from "storeon/react";
import { consultationModule } from "./consultation";
import {
  State as ConsultationState,
  Event as ConsultationEvent,
} from "./consultation";
import { State as UserInfoState, Event as UserInfoEvent } from "./user-info";
import { userInfoModule } from "./user-info";

type State = ConsultationState & UserInfoState;
type Event = ConsultationEvent & UserInfoEvent;

export const store = createStoreon<State, Event>([
  userInfoModule,
  consultationModule,
  process.env.NODE_ENV !== "production" && storeonDevtools,
]);

export const useStore = (keys: keyof State) => useStoreon<State, Event>(keys);
