import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


interface blogState {
  id?: string;
  question: string;
  category: string;
  createdAt?: string;
  message?: string;    
  success?: boolean;
  data?: string;
}

interface IBlogResponse {
    isLoading: boolean;
    isError: boolean;
    blog: blogState | null;
}

const initialState: IBlogResponse = {
    isLoading: false,
    isError: false,
    blog: null
}

const blogSlice = createSlice({
    name: "blog",
    initialState,

    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setBlog: (state, action: PayloadAction<blogState>) => {
            state.blog = action.payload;
        },
        resetBlogState: () => initialState,
    }
})

export const { setLoading, setError, setBlog, resetBlogState } = blogSlice.actions;

export default blogSlice.reducer;