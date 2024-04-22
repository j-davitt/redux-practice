import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducer";
import counterReducer2 from './counter2/reducer';

const store = configureStore({ 
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2 
  } 
    
})

export default store;