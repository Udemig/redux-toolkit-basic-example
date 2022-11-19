import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  firstname: null,
  lastname: null,
  age: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setFirstname: (state, action) => {
      state.firstname = action.payload
    },
    setLastname: (state, action) => {
      state.lastname = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    },
  },
})


export const {setFirstname, setLastname, setAge} = userSlice.actions

export default userSlice.reducer

