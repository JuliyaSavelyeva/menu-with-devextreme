import { configureStore } from '@reduxjs/toolkit';
import planetsReducer from '../features/planets/planetsSlice';
import creaturesReducer from '../features/creatures/creaturesSlice';

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
    creatures: creaturesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
