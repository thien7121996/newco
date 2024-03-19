import { createSlice } from '@reduxjs/toolkit';

interface State {
	count: number;
}

const exampleSlice = createSlice({
	name: 'example',
	initialState: {
		count: 1,
	} as State,
	reducers: {
		addCount: (state, action) => {
			state.count += action.payload;
		},
	},
});

export const { addCount } = exampleSlice.actions;
export default exampleSlice.reducer;
