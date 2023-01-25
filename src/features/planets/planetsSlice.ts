import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getPlanet, getPlanets } from './planetsAPI';
import { PlanetType } from '../../types';

export interface PlanetsState {
  planetsData: PlanetType[] | null;
  planet: PlanetType | null;
  status: 'success' | 'loading' | 'failed';
}

const initialState: PlanetsState = {
  planetsData: null,
  planet: null,
  status: 'success'
};

export const getAllPlanets = createAsyncThunk(
  'planets/getPlanets',
  async () => {
    const response = await getPlanets();
    return response.data.results;
  }
);

export const getSingleArticle = createAsyncThunk(
  'planets/getPlanet',
  async (id: string) => {
    const response = await getPlanet(id);
    return response.data;
  }
);

export const planetsReducer = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlanets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllPlanets.fulfilled, (state, action) => {
        state.status = 'success';
        state.planetsData = action.payload;
      })
      .addCase(getAllPlanets.rejected, (state) => {
        state.status = 'failed';
      });
    builder
      .addCase(getSingleArticle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSingleArticle.fulfilled, (state, action) => {
        state.status = 'success';
        state.planet = action.payload;
      })
      .addCase(getSingleArticle.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const selectPlanets = (state: RootState) => state.planets;
export default planetsReducer.reducer;
