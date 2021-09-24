import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// A mock function to mimic an async request to fetch data:
export const fetchStep = (step = 1) => {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: step }),
      750
    )
  );
};

export const incrementAsyncByStep = createAsyncThunk(
  "counter/fetchStep",
  async (step) => {
    const response = await fetchStep(step);

    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loading: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByStep: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsyncByStep.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementAsyncByStep.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByStep } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
