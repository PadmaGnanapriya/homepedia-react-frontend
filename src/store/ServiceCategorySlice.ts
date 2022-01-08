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

export const fetchServiceCategories = createAsyncThunk('serviceCategories/fetchServiceCategories', async () => {
  const response = await API.GET('service-categories')
  return response.data
})

export const addNewServiceCategory = createAsyncThunk(
  'serviceCategories/addNewServiceCategory',
  async (initialServiceCategory) => {
    const response = await API.POST('service-categories', initialServiceCategory)
    return response.data
  }
)

export const updateServiceCategory = createAsyncThunk(
  'serviceCategories/updateServiceCategory',
  async (id: number, serviceCategory:any) => {
    const response = await API.PATCH('service-categories/' + id, serviceCategory)
    return response.data
  }
)

export const deleteServiceCategory = createAsyncThunk(
  'serviceCategories/deleteServiceCategory',
  async (id: number) => {
    const response = await API.DELETE('service-categories/' + id)
    return response.data
  }
)

const ServiceCategoriesSlice = createSlice({
  name: 'serviceCategories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchServiceCategories.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchServiceCategories.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.dataSet = action.payload;
      })
      .addCase(fetchServiceCategories.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(addNewServiceCategory.fulfilled, (state: stateType, action) => {
        state.dataSet.push(action.payload)
      })
      .addCase(deleteServiceCategory.fulfilled, (state: stateType, action) => {
        state.dataSet = state.dataSet.filter((recode)=> recode._id !== action.payload._id)
      })
  },
})

export default ServiceCategoriesSlice.reducer
export const selectAllServiceCategories = (state: any) => state.serviceCategories.dataSet;
