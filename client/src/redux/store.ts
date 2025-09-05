import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice.ts';
import planSlice from './slice/planSlice.ts'
import blogSlice from './slice/blogSlice.ts'; 
import articleSlice from './slice/articleSlice.ts';
import imgGenerateSlice from './slice/imgGenerateSlice.ts';
import resumeSlice from './slice/resumeSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        plans: planSlice,
        blogs: blogSlice,
        articles: articleSlice,
        imgGenerate: imgGenerateSlice,
        resume: resumeSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch