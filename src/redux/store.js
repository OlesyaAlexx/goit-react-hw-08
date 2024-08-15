import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filtersSlice";
import contactReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
