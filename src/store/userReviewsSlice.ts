import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API} from './api/REST_API'

type stateType = {
  approvedUserReviews: any[],
  allUserReviews: any[],
  status: string,
  error: string | null
}
const initialState: stateType = {
  approvedUserReviews: [],
  allUserReviews: [],
  status: 'idle',
  error: null,
}

export const fetchAllUserReviews = createAsyncThunk('userReviews/fetchAllUserReviews', async () => {
  const response = await API.GET('user-reviews')
  return response.data
})


export const fetchUserReviewsByServiceSupplierId = createAsyncThunk('userReviews/fetchAllUserReviewsByServiceSupplierId', async (id:number) => {
  const response = await API.GET('user-reviews/'+id)
  return response.data
})

export const addNewUserReview = createAsyncThunk(
  'userReviews/addNewUserReview',
  async (initialUserReview) => {
    const response = await API.POST('user-reviews', initialUserReview)
    return response.data
  }
)

export const deleteUserReview = createAsyncThunk(
  'userReviews/deleteUserReview',
  async (id: number) => {
    const response = await API.DELETE('user-reviews/' + id)
    return response.data
  }
)

export const approveUserReview = createAsyncThunk(
  'userReviews/approveUserReview',
  async (id: number) => {
    const response = await API.PATCH('user-reviews/' + id, {})
    return response.data
  }
)


const UserReviewsSlice = createSlice({
  name: 'userReviews',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUserReviews.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAllUserReviews.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.allUserReviews = action.payload;
      })
      .addCase(fetchAllUserReviews.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchUserReviewsByServiceSupplierId.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUserReviewsByServiceSupplierId.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.allUserReviews = action.payload;
      })
      .addCase(fetchUserReviewsByServiceSupplierId.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(addNewUserReview.fulfilled, (state: stateType, action) => {
        state.allUserReviews.unshift(action.payload)
      })
      .addCase(deleteUserReview.fulfilled, (state: stateType, action) => {
        state.allUserReviews = state.allUserReviews.filter((recode)=> recode._id !== action.payload._id)
      })
      .addCase(approveUserReview.fulfilled, (state: stateType, action) => {
        state.allUserReviews = state.allUserReviews.filter((recode)=> recode._id !== action.payload._id)
        state.allUserReviews.push(action.payload)
        state.approvedUserReviews.unshift(action.payload)
      })
  },
})

export default UserReviewsSlice.reducer
export const selectAllUserReviews = (state: any) => state.userReviews.allUserReviews;
export const selectAllUserReviewsByServiceSupplierId = (state: any) => state.userReviews.approvedUserReviews;
