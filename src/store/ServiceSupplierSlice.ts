import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API} from './api/REST_API'

type stateType = {
  allServiceSuppliersForAdmin: any[]
  allServiceSuppliers: any[]
  vipServiceSuppliers: any[]
  status: string
  error: string | null
}

const initialState: stateType = {
  allServiceSuppliersForAdmin: [],
  allServiceSuppliers: [],
  vipServiceSuppliers: [],
  status: 'idle',
  error: null,
}

export const fetchAllServiceSuppliers = createAsyncThunk(
  'serviceSuppliers/fetchAllServiceSuppliers', async () => {
    const response = await API.GET('service-suppliers/for-admin')
    return response.data
  })


export const fetchAllApprovedServiceSuppliers = createAsyncThunk(
  'serviceSuppliers/fetchAllApprovedServiceSuppliers', async () => {
    const response = await API.GET('service-suppliers/search')
    return response.data
  })
//
// export const fetchServiceSuppliersByServiceCategoryName = createAsyncThunk(
//   'serviceSuppliers/fetchAllServiceSuppliersByServiceCategoryName', async (serviceCat: string) => {
//     const response = await API.GET('service-suppliers/search?by-type=' + serviceCat)
//     return response.data
//   })
//
// export const fetchServiceSuppliersByArea = createAsyncThunk(
//   'serviceSuppliers/fetchAllServiceSuppliersByArea', async (area: string) => {
//     const response = await API.GET('service-suppliers/search?by-area=' + area)
//     return response.data
//   })

export const fetchVipServiceSuppliers = createAsyncThunk(
  'serviceSuppliers/fetchVipServiceSuppliers', async () => {
    const response = await API.GET('service-suppliers/search?isVip=true')
    return response.data
  })

export const addNewServiceSupplier = createAsyncThunk(
  'serviceSuppliers/addNewServiceSupplier', async (initialServiceSupplier:any) => {
    const response = await API.POST('service-suppliers', initialServiceSupplier)
    return response.data
  }
)

export const deleteServiceSupplier = createAsyncThunk(
  'serviceSuppliers/deleteServiceSupplier', async (id: number) => {
    const response = await API.DELETE('service-suppliers/' + id)
    return response.data
  }
)

export const approveServiceSupplier = createAsyncThunk(
  'serviceSuppliers/approveServiceSupplier', async (id: number) => {
    const response = await API.PATCH('service-suppliers/' + id, {})
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
      .addCase(fetchAllApprovedServiceSuppliers.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAllApprovedServiceSuppliers.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.allServiceSuppliers = action.payload;
      })
      .addCase(fetchAllApprovedServiceSuppliers.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      // .addCase(fetchServiceSuppliersByServiceCategoryName.pending, (state: stateType, action) => {
      //   state.status = 'loading'
      // })
      // .addCase(fetchServiceSuppliersByServiceCategoryName.fulfilled, (state: stateType, action) => {
      //   state.status = 'succeeded'
      //   state.allServiceSuppliers = action.payload;
      // })
      // .addCase(fetchServiceSuppliersByServiceCategoryName.rejected, (state: stateType, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message || ''
      // })
      // .addCase(fetchServiceSuppliersByArea.pending, (state: stateType, action) => {
      //   state.status = 'loading'
      // })
      // .addCase(fetchServiceSuppliersByArea.fulfilled, (state: stateType, action) => {
      //   state.status = 'succeeded'
      //   state.allServiceSuppliers = action.payload;
      // })
      // .addCase(fetchServiceSuppliersByArea.rejected, (state: stateType, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message || ''
      // })
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
        state.allServiceSuppliers.unshift(action.payload)
      })
  },
})

export default serviceSuppliersSlice.reducer
export const selectAllServiceSuppliersForAdmin = (state: any) => state.serviceSuppliers.allServiceSuppliersForAdmin;
export const selectAllServiceSuppliers = (state: any) => state.serviceSuppliers.allServiceSuppliers;
export const selectVipServiceSuppliers = (state: any) => state.serviceSuppliers.vipServiceSuppliers;
