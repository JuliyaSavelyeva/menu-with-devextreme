import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CreaturesType } from '../../types/contentType';
import { getCreature, getCreatures } from './creaturesAPI';

export interface CreaturesState {
  creaturesData: [CreaturesType] | null;
  creature: CreaturesType | null;
  status: 'success' | 'loading' | 'failed';
}

const initialState: CreaturesState = {
  creaturesData: null,
  creature: null,
  status: 'success'
};

export const getAllCreatures = createAsyncThunk(
  'planets/getPlanets',
  async () => {
    const response = await getCreatures();
    return response.data.results;
  }
);

export const getSingleCreature = createAsyncThunk(
  'planets/getPlanet',
  async (id: string) => {
    const response = await getCreature(id);
    return response.data;
  }
);

export const creaturesReducer = createSlice({
  name: 'creatures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCreatures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCreatures.fulfilled, (state, action) => {
        state.status = 'success';
        state.creaturesData = action.payload;
      })
      .addCase(getAllCreatures.rejected, (state) => {
        state.status = 'failed';
      });
    builder
      .addCase(getSingleCreature.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSingleCreature.fulfilled, (state, action) => {
        state.status = 'success';
        state.creature = action.payload;
      })
      .addCase(getSingleCreature.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const selectCreatures = (state: RootState) => state.creatures;
export default creaturesReducer.reducer;
