import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


interface imgGenerateState {
  id?: string;
  context: string;
  style: string;
  createdAt?: string;
  message?: string;    
  success?: boolean;
  data?: string;
}

interface IImgGenerateResponse {
    isLoading: boolean;
    isError: boolean;
    imgGenerate: imgGenerateState | null;
}

const initialState: IImgGenerateResponse = {
    isLoading: false,
    isError: false,
    imgGenerate: null
}


const imgGenerateSlice = createSlice({
    name: "imgGenerate",
    initialState,

    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setImgGenerate: (state, action: PayloadAction<imgGenerateState>) => {
            state.imgGenerate = action.payload;
        },
        resetImgGenerateState: () => initialState,
    }
})

export const { setLoading, setError, setImgGenerate, resetImgGenerateState } = imgGenerateSlice.actions;

export default imgGenerateSlice.reducer;