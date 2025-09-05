import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


interface articleState {
  id?: string;
  question: string;
  createdAt?: string;
  message?: string;    
  success?: boolean;
  data?: string;
}

interface IArticleResponse {
    isLoading: boolean;
    isError: boolean;
    article: articleState | null;
}

const initialState: IArticleResponse = {
    isLoading: false,
    isError: false,
    article: null
}


const articleSlice = createSlice({
    name: "article",
    initialState,

    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setArticle: (state, action: PayloadAction<articleState>) => {
            state.article= action.payload;
        },
        resetArticleState: () => initialState,
    }
})

export const { setLoading, setError, setArticle, resetArticleState } = articleSlice.actions;

export default articleSlice.reducer;