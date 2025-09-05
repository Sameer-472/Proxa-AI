import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Plan {
  id: string;
  planName: string;
  price: number;
  content: string[];
  createdAt: string;
}

interface PlanState {
  isLoading: boolean;
  isError: boolean;
  plans: Plan[];
}

const initialState: PlanState = {
  isLoading: false,
  isError: false,
  plans: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState,

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setPlans: (state, action: PayloadAction<Plan>) => {
      state.plans = [action.payload];
    },
    addPlan: (state, action: PayloadAction<Plan[]>) => {
      state.plans.push(...action.payload);
    },
  },
});

export const { setLoading, setError, setPlans, addPlan } = planSlice.actions;
export default planSlice.reducer;
