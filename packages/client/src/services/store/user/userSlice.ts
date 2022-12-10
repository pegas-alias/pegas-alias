import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '../../../types/user';
import { UserState } from './type';
import { authLogout, changeProfile, getUserApi } from './userThunk';


const initialState: UserState = {
  user: {
    id: 0,
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    avatar: ''
  },
  status: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<UserInfo>) {
      const data = action.payload;
      state.user = data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserApi.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.user = action.payload;
      })
      .addCase(changeProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.user = {...initialState.user};
      })
  },
})

export const { getUser } = userSlice.actions
export default userSlice.reducer
