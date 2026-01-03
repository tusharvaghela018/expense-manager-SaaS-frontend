import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/Redux/store';

type UserType = {
  id: number | null;
  name: string | null;
  email: string | null;
};

type AuthType = {
  user: UserType | null;
  token: string | null;
};

const initialState: AuthType = {
  user: {
    id: null,
    name: null,
    email: null,
  },
  token: null,
};

const autheSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthType>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    cleanUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, cleanUser } = autheSlice.actions;
export default autheSlice.reducer;

export const getAuth = (state: RootState) => state.auth;
