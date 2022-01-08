import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API} from './api/REST_API'

type stateType = {
  allServiceSuppliersForAdmin: any[],
  allServiceSuppliersByServiceCategory: any[]
  allServiceSuppliersByServiceArea: any[]
  vipServiceSuppliers: any[]
  status: string,
  error: string | null
}

const initialState: stateType = {
  allServiceSuppliersForAdmin: [],
  allServiceSuppliersByServiceCategory: [],
  allServiceSuppliersByServiceArea: [],
  vipServiceSuppliers: [],
  status: 'idle',
  error: null,
}

export const fetchAllServiceSuppliers = createAsyncThunk(
  'serviceSuppliers/fetchAllServiceSuppliers', async () => {
    const response = await API.GET('service-suppliers/for-admin')
    return response.data
  })

export const fetchServiceSuppliersByServiceCategoryName = createAsyncThunk(
  'serviceSuppliers/fetchAllServiceSuppliersByServiceCategoryName', async (serviceCat: string) => {
    const response = await API.GET('service-suppliers/by-type?service=' + serviceCat)
    return response.data
  })

export const fetchServiceSuppliersByArea = createAsyncThunk(
  'serviceSuppliers/fetchAllServiceSuppliersByArea', async (area: string) => {
    const response = await API.GET('service-suppliers/by-area?area=' + area)
    return response.data
  })

export const fetchVipServiceSuppliers = createAsyncThunk(
  'serviceSuppliers/fetchVipServiceSuppliers', async () => {
    const response = await API.GET('service-suppliers/vip')
    return response.data
  })

export const addNewServiceSupplier = createAsyncThunk(
  'serviceSuppliers/addNewServiceSupplier', async (initialServiceSupplier) => {
    const response = await API.POST('user-reviews', initialServiceSupplier)
    return response.data
  }
)

export const deleteServiceSupplier = createAsyncThunk(
  'serviceSuppliers/deleteServiceSupplier', async (id: number) => {
    const response = await API.DELETE('user-reviews/' + id)
    return response.data
  }
)

export const approveServiceSupplier = createAsyncThunk(
  'serviceSuppliers/approveServiceSupplier', async (id: number) => {
    const response = await API.PATCH('user-reviews/' + id, {})
    return response.data
  }
)

const serviceSuppliersSlice = createSlice({
  name: 'serviceSuppliers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllServiceSuppliers.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAllServiceSuppliers.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.allServiceSuppliersForAdmin = action.payload;
      })
      .addCase(fetchAllServiceSuppliers.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchServiceSuppliersByServiceCategoryName.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchServiceSuppliersByServiceCategoryName.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.allServiceSuppliersByServiceCategory = action.payload;
      })
      .addCase(fetchServiceSuppliersByServiceCategoryName.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchServiceSuppliersByArea.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchServiceSuppliersByArea.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.allServiceSuppliersByServiceArea = action.payload;
      })
      .addCase(fetchServiceSuppliersByArea.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchVipServiceSuppliers.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchVipServiceSuppliers.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.vipServiceSuppliers = action.payload;
      })
      .addCase(fetchVipServiceSuppliers.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(addNewServiceSupplier.fulfilled, (state: stateType, action) => {
        state.allServiceSuppliersForAdmin.unshift(action.payload)
      })
      .addCase(deleteServiceSupplier.fulfilled, (state: stateType, action) => {
        state.allServiceSuppliersForAdmin = state.allServiceSuppliersForAdmin.filter((recode) => recode._id !== action.payload._id)
      })
      .addCase(approveServiceSupplier.fulfilled, (state: stateType, action) => {
        state.allServiceSuppliersForAdmin = state.allServiceSuppliersForAdmin.filter((recode) => recode._id !== action.payload._id)
        state.allServiceSuppliersForAdmin.push(action.payload)
        state.allServiceSuppliersByServiceArea.unshift(action.payload)
      })
  },
})

export default serviceSuppliersSlice.reducer
export const selectAllServiceSuppliers = (state: any) => state.serviceSuppliers.allServiceSuppliersForAdmin;
export const selectAllServiceSuppliersByServiceCategory = (state: any) => state.serviceSuppliers.allServiceSuppliersByServiceCategory;
export const selectAllServiceSuppliersByArea = (state: any) => state.serviceSuppliers.allServiceSuppliersByServiceArea;
export const selectVipServiceSuppliers = (state: any) => state.serviceSuppliers.vipServiceSuppliers;
