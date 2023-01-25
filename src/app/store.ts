import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import planetsReducer from '../features/planets/planetsSlice';

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
    creatures: planetsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
