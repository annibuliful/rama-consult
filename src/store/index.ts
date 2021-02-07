import { createStoreon, StoreonModule } from "storeon";
import { storeonDevtools } from "storeon/devtools";
import { useStoreon } from "storeon/react";

// State structure
interface State {
  counter: number;
}

// Events declaration: map of event names to type of event data
interface Events {
  // `inc` event which do not goes with any data
  inc: undefined;
  // `set` event which goes with number as data
  set: number;
}

const counterModule: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({ counter: 0 }));
  store.on("inc", (state) => ({ counter: state.counter + 1 }));
  store.on("set", (state, event) => ({ counter: event }));
};

export const store = createStoreon<State, Events>([
  counterModule,
  process.env.NODE_ENV !== "production" && storeonDevtools,
]);

export const useStore = (keys: keyof State) => useStoreon<State, Events>(keys);
