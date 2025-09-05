import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    imageUrl: string | null,
    imageUrlId: string | null,
    message?: string,
    success?: boolean,
    subscriptionPlan?: string,
    role?: string, 
}

interface AuthState {
    isLoading: boolean,
    isError: boolean,
    user: User | null,
    isAuthenticated?: boolean,
}

const initialState: AuthState = {
    isLoading: false,
    isError: false,
    user: null,
    isAuthenticated: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        resetAuthState: () => initialState,
    }
})

export const { setLoading, setError, setUser, logout, resetAuthState } = authSlice.actions;

export default authSlice.reducer;