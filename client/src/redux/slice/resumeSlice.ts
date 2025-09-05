import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


interface resumeState {
  id?: string;
  analysis: File | null;
  createdAt?: string;
  message?: string;    
  success?: boolean;
  data?: string;
}

interface IResumeResponse {
    isLoading: boolean;
    isError: boolean;
    resume: resumeState | null;
}

const initialState: IResumeResponse = {
    isLoading: false,
    isError: false,
    resume: null
}


const resumeSlice = createSlice({
    name: "resume",
    initialState,

    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setResume: (state, action: PayloadAction<resumeState>) => {
            state.resume= action.payload;
        },
        resetResumeState: () => initialState,
    }
})

export const { setLoading, setError, setResume, resetResumeState } = resumeSlice.actions;

export default resumeSlice.reducer;