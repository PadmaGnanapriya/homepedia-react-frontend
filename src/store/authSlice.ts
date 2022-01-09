import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {auth} from "../utils/firebase";
import {GoogleAuthProvider} from "firebase/auth";

type stateType = {
  loggedUser: any,
  status: string,
  error: string | null,
  role: string,
}
const initialState: stateType = {
  loggedUser: null,
  status: 'idle',
  error: null,
  role: ''
}

export const signWithEmailPassword = createAsyncThunk('auth/SignWithEmailPassword',
  async (data: any) => {
    return await auth.signInWithEmailAndPassword(data.email.value, data.password.value);
  })

export const signWithGoogle = createAsyncThunk('auth/SignWithGoogle', async () => {
  const provider = new GoogleAuthProvider();
  return await auth.signInWithPopup(provider)
})

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(signWithEmailPassword.pending, (state: stateType, action) => {
          state.status = 'loading'
        })
        .addCase(signWithEmailPassword.fulfilled, (state: stateType, action) => {
          state.status = 'succeeded'
          state.loggedUser = action.payload;
        })
        .addCase(signWithEmailPassword.rejected, (state: stateType, action) => {
          state.status = 'failed'
          state.error = action.error.message || ''
        })
        .addCase(signWithGoogle.pending, (state: stateType, action) => {
          state.status = 'loading'
        })
        .addCase(signWithGoogle.fulfilled, (state: stateType, action) => {
          state.status = 'succeeded'
          state.loggedUser = action.payload;
        })
        .addCase(signWithGoogle.rejected, (state: stateType, action) => {
          state.status = 'failed'
          state.error = action.error.message || ''
        })
    },
  })

  export default authSlice.reducer
  export const loggedUser = (state: any) => state.auth.loggedUser;
  export const loggedRole = (state: any) => state.auth.role;
