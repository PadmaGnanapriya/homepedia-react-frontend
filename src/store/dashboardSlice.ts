import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API} from './api/REST_API'

type stateType = {
  cardData: any,
  cardDataStatus: string,
  tableData: any,
  tableDataStatus: string,
  chartData: any,
  chartDataStatus: string,
  pieData: any,
  pieDataStatus: string,
  error: string | null

}
const initialState: stateType = {
  cardData: null,
  cardDataStatus: 'idle',
  tableData: null,
  tableDataStatus: 'idle',
  chartData: null,
  chartDataStatus: 'idle',
  pieData: null,
  pieDataStatus: 'idle',
  error: null,
}

export const fetchCardData = createAsyncThunk('dashboard/fetchCardData', async () => {
  const response = await API.GET('dashboard/card-data')
  return response.data
})

export const fetchTableData = createAsyncThunk('dashboard/fetchTableData', async () => {
  const response = await API.GET('dashboard/table-data')
  return response.data
})

export const fetchChartData = createAsyncThunk('dashboard/fetchChartData', async () => {
  const response = await API.GET('dashboard/chart-data')
  return response.data
})

export const fetchPieData = createAsyncThunk('dashboard/fetchPieData', async () => {
  const response = await API.GET('dashboard/pie-data')
  return response.data
})

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCardData.pending, (state: stateType, action) => {
        state.cardDataStatus = 'loading'
      })
      .addCase(fetchCardData.fulfilled, (state: stateType, action) => {
        state.cardDataStatus = 'succeeded'
        state.cardData = action.payload;
      })
      .addCase(fetchCardData.rejected, (state: stateType, action) => {
        state.cardDataStatus = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchTableData.pending, (state: stateType, action) => {
        state.tableDataStatus = 'loading'
      })
      .addCase(fetchTableData.fulfilled, (state: stateType, action) => {
        state.tableDataStatus = 'succeeded'
        state.tableData = action.payload;
      })
      .addCase(fetchTableData.rejected, (state: stateType, action) => {
        state.tableDataStatus = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchChartData.pending, (state: stateType, action) => {
        state.chartDataStatus = 'loading'
      })
      .addCase(fetchChartData.fulfilled, (state: stateType, action) => {
        state.chartDataStatus = 'succeeded'
        state.chartData = action.payload;
      })
      .addCase(fetchChartData.rejected, (state: stateType, action) => {
        state.chartDataStatus = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchPieData.pending, (state: stateType, action) => {
        state.pieDataStatus = 'loading'
      })
      .addCase(fetchPieData.fulfilled, (state: stateType, action) => {
        state.pieDataStatus = 'succeeded'
        state.pieData = action.payload;
      })
      .addCase(fetchPieData.rejected, (state: stateType, action) => {
        state.pieDataStatus = 'failed'
        state.error = action.error.message || ''
      })
  },
})

export default dashboardSlice.reducer

