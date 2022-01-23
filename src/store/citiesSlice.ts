import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API} from './api/REST_API'

type stateType = {
  dataSet: any[],
  status: string,
  error: string | null
}
const initialState: stateType = {
  dataSet: [],
  status: 'idle',
  error: null,
}

export const fetchCities = createAsyncThunk('Cities/fetchCities', async () => {
  const response = await API.GET('cities')
  return response.data
})

export const addNewCity = createAsyncThunk(
  'Cities/addNewCity',
  async (initialCitie:any) => {
    const response = await API.POST('cities', initialCitie)
    return response.data
  }
)

export const updateCity = createAsyncThunk(
  'Cities/updateCity',
  async (initialCity:any) => {
    const response = await API.POST('cities', initialCity)
    return response.data
  }
)

export const deleteCity = createAsyncThunk(
  'Cities/deleteCity',
  async (id: number) => {
    const response = await API.DELETE('cities/' + id)
    return response.data
  }
)

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCities.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded';
        state.dataSet = action.payload;
      })
      .addCase(fetchCities.rejected, (state: stateType, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
      .addCase(addNewCity.pending, (state: stateType, action) => {
        state.status = 'sending';
      })
      .addCase(addNewCity.rejected, (state: stateType, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
      .addCase(addNewCity.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded';
        state.dataSet.push(action.payload);
      })
      .addCase(updateCity.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded';
        state.dataSet = action.payload;
      })
      .addCase(updateCity.rejected, (state: stateType, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
      .addCase(deleteCity.fulfilled, (state: stateType, action) => {
        state.dataSet = state.dataSet.filter((recode)=> recode._id !== action.payload._id);
      })
  },
})

export default citiesSlice.reducer
export const selectAllCities = (state: any) => state.cities.dataSet;

