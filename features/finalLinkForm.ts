interface linkData {
	vehicleInfo: {
		vehicleRegistrationNumber: string;
		vehicleIdValue: string;
		brandName: string;
		modelName: string;
		year: string;
		modification: string;
	};
	ownerInfo: {
		address: {
			ownerRegistrationCity: string;
		};
	};
	multiDriveFlag: boolean;
}
import { createSlice } from '@reduxjs/toolkit';

const finalLinkForm = createSlice({
	name: 'finalLinkForm',
	initialState: {
		contractInfo: {
			vehicleInfo: {
				brandName: '',
				modelName: '',
				year: '',
				modification: '',
				vehicleRegistrationNumber: '',
				vehicleIdValue: '',
			},
			ownerInfo: {
				address: {
					ownerRegistrationCity: '',
				},
			},
			multiDriveFlag: false,
		} as linkData,
	},
	reducers: {
		setContactInfo(state, action) {
			state.contractInfo = action.payload;
		},
	},
});

export const { setContactInfo } = finalLinkForm.actions;
export default finalLinkForm.reducer;
