import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	calcResult: 0,
	errorText: '',
};

const osagoCalculationSlice = createSlice({
	name: 'osagoCalc',
	initialState: {
		data: initialState,
	},
	reducers: {
		setCalculationResult(state, action) {
			state.data.calcResult = action.payload;
		},
		setCalculationErrorText(state, action) {
			state.data.errorText = action.payload;
		},
	},
});

export const { setCalculationResult } = osagoCalculationSlice.actions;
export const { setCalculationErrorText } = osagoCalculationSlice.actions;
export default osagoCalculationSlice.reducer;
