import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {auth} from "../utils/firebase";
import {GoogleAuthProvider} from "firebase/auth";
import {ROUTE_PATH} from "../constants/RoutePaths";

type stateType = {
  status: string,
  error: string | null,
  role: string,
}
const initialState: stateType = {
  status: 'idle',
  error: null,
  role: 'Viewer'
}  // 'Administrator', 'Viewer', 'ServiceSupplier', 'Any'

const getRole = () => {
  let role = 'Visitor';
  auth.onAuthStateChanged(user => {
    if (user) {
      user.getIdTokenResult()
        .then((idTokenResult) => {
          sessionStorage.setItem('userRole', idTokenResult.claims.role ? idTokenResult.claims.role : 'Viewer');
          role = idTokenResult.claims.role ? idTokenResult.claims.role : 'Viewer';
        });
    } else {
      sessionStorage.setItem('userRole', 'Viewer');
    }
  });
  return role;
}

export const signWithEmailPassword = createAsyncThunk('auth/SignWithEmailPassword', async (data: any) => {
  return auth.signInWithEmailAndPassword(data.email.value, data.password.value).then(() => {
    return getRole();
  })
})

export const signWithGoogle = createAsyncThunk('auth/SignWithGoogle', async () => {
  const provider = new GoogleAuthProvider();
  return auth.signInWithPopup(provider).then(() => {
    return getRole();
  })
})

export const signOut = createAsyncThunk('auth/SignOut', async () => {
  sessionStorage.setItem('userRole', 'Viewer');
  return await auth.signOut();
})

export const forgotPassword = createAsyncThunk('auth/ForgotPassword', async (email: string) => {
  return await auth.sendPasswordResetEmail(email);
})

export const resetRole = createAsyncThunk('auth/ResetRole', () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      user.getIdTokenResult()
        .then((idTokenResult) => {
          sessionStorage.setItem('userRole', idTokenResult.claims.role ? idTokenResult.claims.role : 'Viewer');
        });
    } else {
      sessionStorage.setItem('userRole', 'Viewer');
    }
  });
  return getRole();
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
        state.role = sessionStorage.getItem('userRole') || 'Viewer';
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
        state.role = sessionStorage.getItem('userRole') || 'Viewer';
      })
      .addCase(signWithGoogle.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(signOut.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.role = 'Viewer';
      })
      .addCase(forgotPassword.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(forgotPassword.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        // state.role = action.payload;
      })
      .addCase(forgotPassword.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(resetRole.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.role = sessionStorage.getItem('userRole') || 'Viewer';
      })
  },
})

export default authSlice.reducer
export const loggedRole = (state: any) => state.auth.role;
