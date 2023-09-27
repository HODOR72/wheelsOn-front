import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

interface contractInfo {
	policyBeginDate: string;
	multidrive: boolean;
	followToRegistration: boolean;
	ownerRegistrationCity: string;
	ownerRegistrationCountry: string;
	ownerRegistrationRegion: string;
	period1Beg: string;
	period1End: string;
}

interface transport {
	categoryId: number;
	operationType: string;
	power: string;
	trailer: boolean;
}

interface driver {
	birthDate: string;
	experienceDate: string;
	KBM: string;
}

interface drivers {
	driver: driver;
}

interface osagoReqFormData {
	contractInfo: contractInfo;
	transport: transport;
	drivers: drivers;
}

const osagoReqFormData: osagoReqFormData = {
	contractInfo: {
		policyBeginDate:
			moment(new Date()).add(4, 'd').format('YYYY-MM-DD') + 'T10:47:07',
		multidrive: true,
		followToRegistration: false,
		ownerRegistrationCity: '',
		ownerRegistrationCountry: 'Россия',
		ownerRegistrationRegion: '',
		period1Beg: moment(new Date()).format('YYYY-MM-DD'),
		period1End: moment(new Date()).add(1, 'y').subtract(1, 'd').format('YYYY-MM-DD'),
	},
	transport: {
		categoryId: 2,
		operationType: 'Личные',
		power: '',
		trailer: false,
	},
	drivers: {
		driver: {
			birthDate: '',
			experienceDate: '',
			KBM: '0.46',
		},
	},
};

const osagoReqFormDataSlice = createSlice({
	name: 'reqFormData',
	initialState: {
		data: osagoReqFormData,
	},
	reducers: {
		setCityReducer(state, action) {
			state.data.contractInfo.ownerRegistrationCity = action.payload;
		},

		setRegionReducer(state, action) {
			state.data.contractInfo.ownerRegistrationRegion = action.payload;
		},

		setPower(state, action) {
			state.data.transport.power = action.payload;
		},

		setTrailer(state, action) {
			state.data.transport.trailer = action.payload;
		},

		setMultidriveReducer(state, action) {
			state.data.contractInfo.multidrive = action.payload;
		},

		setBirthDate(state, action) {
			state.data.drivers.driver.birthDate = action.payload;
		},

		setExperienceDate(state, action) {
			state.data.drivers.driver.experienceDate = action.payload;
		},

		setKBM(state, action) {
			state.data.drivers.driver.KBM = action.payload;
		},
	},
});

export const {
	setCityReducer,
	setRegionReducer,
	setPower,
	setTrailer,
	setMultidriveReducer,
	setBirthDate,
	setExperienceDate,
	setKBM,
} = osagoReqFormDataSlice.actions;

export default osagoReqFormDataSlice.reducer;
