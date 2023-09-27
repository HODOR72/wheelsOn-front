import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loadingReducer from '../features';
import osagoReqFormData from '../features/osagoReqFormData';
import osagoCalculation from '../features/osagoCalculation';
import finalLinkForm from '../features/finalLinkForm';

import testVictorina from '../features/testVictorina';

export const store = configureStore({
	reducer: {
		loadingReducer,
		osagoReqFormData,
		osagoCalculation,
		testVictorina,
		finalLinkForm,
	},
});
