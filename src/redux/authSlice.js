import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token'),
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log('>> Auth Slice Set Token', state, action)
    },
    removeToken: (state, action) => {
      console.log('>> Auth Slice Remove Token', state, action)
    },
  },
})

export const {setToken, removeToken} = authSlice.actions

export default authSlice.reducer
