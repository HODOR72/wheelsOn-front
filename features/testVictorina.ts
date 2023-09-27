import { createSlice } from "@reduxjs/toolkit"

const stepVariants = {
	first: "",
	second: "",
	third: "",
}

const testVictorinaSlice = createSlice({
	name: "testVictorina",
	initialState: {
		steps: stepVariants,
	},
	reducers: {
		setFirstStep(state, action) {
			state.steps.first = action.payload
		},
		setSecondStep(state, action) {
			state.steps.second = action.payload
		},
		setThirdStep(state, action) {
			state.steps.third = action.payload
		},
	},
})

export const { setFirstStep, setSecondStep, setThirdStep } =
	testVictorinaSlice.actions
export default testVictorinaSlice.reducer
