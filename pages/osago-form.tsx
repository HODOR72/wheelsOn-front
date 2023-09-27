import type { NextPage } from "next";
import React from "react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosBasicPath } from "../mixins/axiosBasicPath";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TextComponent } from "../components/text-component";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import russianToEnglishTranslit from "../mixins/russianToEnglishTranslit";
import { DoubleBorderWidget } from "../widgets/double-border-widget";
import { LoadingButtonComponent } from "../components/loading-button-component";
import { setContactInfo } from "../features/finalLinkForm";
import { Box } from "@mui/material";

import {
	OsagoForm,
	vehicleMark,
	vehicleModel,
	vehicleModification,
	state,
	KBM,
} from "../interfaces";

import {
	setCalculationResult,
	setCalculationErrorText,
} from "../features/osagoCalculation";

import { ProgressBarWidget } from "../widgets/progress-bar-widget";
import { Osago1Step } from "../views/osago1";
import { Osago2Step } from "../views/osago2";
import {
	setCityReducer,
	setRegionReducer,
	setBirthDate,
	setExperienceDate,
	setPower,
	setTrailer,
	setMultidriveReducer,
	setKBM,
} from "../features/osagoReqFormData";
import { ScrollDownIconWidget } from "../widgets/scroll-down-icon-widget";
import { Osago0Step } from "../views/osago0";
import { ErrorGrz } from "../views/errorGrz";

const isPricepList = [
	{ id: 1, value: "Да" },
	{ id: 2, value: "Нет" },
];

const OsagoForm: NextPage<OsagoForm> = ({ vehicleMarks }) => {
	const vehicleMarkOptions = vehicleMarks.map((mark) => mark.value);
	const dispatch = useDispatch();
	const router = useRouter();

	const KBMS: KBM[] = [
		{ id: "1.17", value: "0 лет - 1.17" },
		{ id: "1", value: "1 год - 1" },
		{ id: "0.91", value: "2 года - 0.91" },
		{ id: "0.83", value: "3 года – 0.83" },
		{ id: "0.78", value: "4 года - 0.78" },
		{ id: "0.74", value: "5 лет - 0.74" },
		{ id: "0.68", value: "6 лет - 0.68" },
		{ id: "0.63", value: "7 лет - 0.63" },
		{ id: "0.57", value: "8 лет - 0.57" },
		{ id: "0.52", value: "9 лет - 0.52" },
		{ id: "0.46", value: "10 лет и более – 0.46" },
	];

	const stateOsagoReqFormData = useSelector(
		(state: state) => state.osagoReqFormData.data
	);

	const stateFinalLink = useSelector(
		(state: any) => state.finalLinkForm.contractInfo
	);

	const [carId, setCarId] = useState<string | undefined>("");
	const [modelCarId, setModelCarId] = useState<string | undefined>("");

	const [osago1preload, setOsago1Preload] = useState(false);
	const [showGRZError, setShowGRZError] = useState(false);
	const [osagoStep, setOsagoStep] = useState(1);
	const [carGRZ, setCarGRZ] = useState("");
	const [carVin, setCarVin] = useState("");
	const [progressbarValue, setProgressbarValue] = useState(10);
	const [city, setCity] = useState("");
	const [cities, setCities] = useState<string[]>([]);
	const [carMark, setCarMark] = useState("");
	const [carMarkId, setCarMarkId] = useState("");
	const [carModelsObjects, setCarModelsObjects] = useState([]);
	const [carModelsLabels, setCarModelsLabels] = useState([]);
	const [carYearsList, setCarYearsList] = useState<string[]>([]);
	const [carModel, setCarModel] = useState("");
	const [carYear, setCarYear] = useState("");
	const [carModificationsList, setCatModificationsList] = useState<string[]>(
		[]
	);
	const [carModificationObjectsList, setCarModificationObjectsList] = useState(
		[]
	);
	const [carModification, setCarModification] = useState("");
	const [carModificationSelected, setCarModificationSelected] = useState(false);
	const [pricepPresence, setPricepPresence] = useState("Нет");
	const [isMultidrive, setIsMulridrive] = useState(false);
	const [driverAge, setDriverAge] = useState("");
	const [driverExp, setDriverExp] = useState("");
	const [yearWithoutAccidence, setYearWithoutAccidence] = useState(
		"10 лет и более – 0.46"
	);
	const [grzLoading, setGrzLoading] = useState(false);
	const [loading, setLoading] = useState(false);

	const closeGRZErrorHandler = () => {
		setShowGRZError(false);
	};

	const setCarGRZHandler = (grzValue: string) => {
		setCarGRZ(grzValue);
	};
	const setCityHandler = async (city: string) => {
		if (city === "") {
			setCity(city);
			setProgressbarValue(10);
			return;
		}
		setCity(city);
		const citiesRequest = await axios.get(
			axiosBasicPath + `/api/dadata/${city}/`
		);
		if (!citiesRequest.data) return;
		const cities = citiesRequest.data.suggestions.map(
			(object: any) => object.value
		);
		setCities(cities);
		dispatch(setCityReducer(citiesRequest.data.suggestions[0].data.city));
		dispatch(setRegionReducer(citiesRequest.data.suggestions[0].data.region));
	};

	// Обработка события "Ввести данные по ТС вручную"
	const clickSelfEnteringHandler = () => {
		setOsago1Preload(false);
		setCarGRZ("");
		setCity("");
		setCarMark("");
		setCarMarkId("");
		setCarModel("");
		setCarModelsObjects([]);
		setCarModelsLabels([]);
		setCarYear("");
		setCarYearsList([]);
		setCarModification("");
		setCatModificationsList([]);
		setCarModificationObjectsList([]);
		setOsagoStep(2);
		setProgressbarValue(10);
	};

	// Обработка события Ввода ГРЗ
	const reqGRZHandler = async () => {
		setGrzLoading(true);
		try {
			const req = await axios.get(
				encodeURI(`${axiosBasicPath}/api/auto_fill/grz/` + carGRZ + "/")
			);
			const data = req.data;

			if (
				data.autoFillResponse.transport.mark === "ДРУГОЕ ТС" ||
				!data.autoFillResponse.transport.mark
			) {
				setGrzLoading(false);
				setShowGRZError(true);
				return;
			}

			setOsago1Preload(true);
			const mark: string = await data.autoFillResponse.transport.mark;
			setCarMarkHandlerPromise(mark).then((promiseObject: any) => {
				const model = data.autoFillResponse.transport.model;
				setCarModelHandlerPromise(model, promiseObject.models, promiseObject.id)
					.then(async () => {
						const markId = vehicleMarks.find(
							(mrk: vehicleMark) => mrk.value === mark
						)?.id;
						if (!markId) return;
						setCarMarkId(markId);

						const reqModels: any = await axios.get(
							axiosBasicPath + "/api/list_model/2/" + markId + "/"
						);
						const models = reqModels.data;
						const modelId = models.find(
							(mdl: vehicleMark) => mdl.value === model
						).id;
						if (!modelId) return;
						setModelCarId(modelId);

						const year = data.autoFillResponse.transport.yearIssue;

						const carModificationsRes = await axios.get(
							axiosBasicPath +
								"/api/list_modification/" +
								markId +
								"/" +
								modelId +
								"/" +
								year +
								"/"
						);

						if (!carModificationsRes.data) return false;
						const carModificationsList = carModificationsRes.data.map(
							(modification: vehicleMark) => modification.value
						);
						setCarModificationObjectsList(carModificationsRes.data);
						setCatModificationsList(carModificationsList);
						setCarYear(year);

						const power = new RegExp(
							data.autoFillResponse.transport.power.toString()
						);

						const currentModification =
							carModificationsList.find((modification: string) =>
								power.test(modification)
							) || carModificationsList[0];

						const engCap = carModificationsRes.data.find(
							(modificationObject: any) =>
								modificationObject.value === currentModification
						).engCap;

						setCarModification(currentModification);

						setCarModificationSelected(true);
						dispatch(setPower(engCap));
						setProgressbarValue(70);
					})
					.then(() => {
						setGrzLoading(false);
						setOsagoStep(2);
					});
			});
			setCarVin(data.autoFillResponse.transport.vin);
			setGrzLoading(false);
			setOsagoStep(2);
		} catch {
			setGrzLoading(false);
			setShowGRZError(true);
			return;
		}
	};

	const setCarMarkHandlerPromise = async (carMarkParam: string) => {
		return new Promise(async (resolve, reject) => {
			const data = await setCarMarkHandler(carMarkParam);
			if (!data) reject(false);
			resolve(data);
		});
	};

	const setCarMarkHandler = async (carMarkParam: string) => {
		setCarModelsLabels([]);
		setCarModel("");
		setCarYear("");
		setCarModification("");
		if (!carMarkParam) {
			setCarMark("");
			setProgressbarValue(20);
			return false;
		}
		setCarMark(russianToEnglishTranslit(carMarkParam));
		const carMarkObject = (await vehicleMarks.find(
			(mark: vehicleMark) => mark.value === carMarkParam
		)) || { id: "", value: "" };
		setCarMarkId(carMarkObject.id);
		const carMarkIdLocal = carMarkObject.id;
		setProgressbarValue(30);

		const reqModels: any = await axios.get(
			axiosBasicPath + "/api/list_model/2/" + carMarkIdLocal + "/"
		);
		if (!reqModels.data) return false;
		setCarModelsObjects(reqModels.data);
		setCarModelsLabels(reqModels.data.map((item: vehicleMark) => item.value));

		return { models: reqModels.data, id: carMarkIdLocal };
	};

	const setCarModelHandlerPromise = (
		carModelParam: string,
		carModelsObjectsParam?: any,
		carId?: string
	) => {
		return new Promise(async (resolve, reject) => {
			const data = await setCarModelHandler(
				carModelParam,
				carModelsObjectsParam,
				carId
			);
			if (!data) reject();
			resolve(true);
		});
	};

	const setCarModelHandler = async (
		carModelParam: string,
		carModelsObjectsParam?: any,
		carId?: string
	) => {
		setCarId(carId);
		setCarYear("");
		setCarModification("");
		setCarYearsList([]);
		if (!carModelParam) {
			setProgressbarValue(30);
			return false;
		}
		setCarModel(carModelParam);
		const carModelsObjectsLocal = carModelsObjectsParam
			? carModelsObjectsParam
			: carModelsObjects;
		const carModelObject: vehicleModel = (await carModelsObjectsLocal.find(
			(model: vehicleModel) => model.value === carModelParam
		)) || { id: "", value: "", outYears: { year: [""] } };
		if (carModelObject.id === "") return false;
		setModelCarId(carModelObject.id);
		const carYearsArray: string[] = carModelObject.outYears.year;
		setCarYearsList(carYearsArray.reverse());
		setProgressbarValue(40);
		return true;
	};

	const setCarYearHandler = async (year: string) => {
		if (!year) {
			setCarYear("");
			setProgressbarValue(40);
			return;
		}
		setCarYear(year);
		setProgressbarValue(50);

		const carModificationsRes = await axios.get(
			axiosBasicPath +
				"/api/list_modification/" +
				(carId ? carId : carMarkId) +
				"/" +
				modelCarId +
				"/" +
				year +
				"/"
		);
		if (!carModificationsRes.data) return false;
		const carModificationsList = carModificationsRes.data.map(
			(modification: vehicleMark) => modification.value
		);
		setCarModificationObjectsList(carModificationsRes.data);
		setCatModificationsList(carModificationsList);
	};

	const setCarModificationHandler = async (carMod: string) => {
		setCarModificationSelected(false);
		if (!carMod) {
			setProgressbarValue(50);
			return;
		}
		setCarModification(carMod);
		const modification = (await carModificationObjectsList.find(
			(mod: vehicleModification) => mod.value === carMod
		)) || { id: "", value: "", engCap: "" };
		if (modification.id === "") return;
		setCarModificationSelected(true);
		dispatch(setPower(modification.engCap));
		setProgressbarValue(70);
	};

	const setPricepPresenceHandler = (option: string) => {
		setPricepPresence(option);
		let boolOption: boolean = false;
		switch (option) {
			case "Да": {
				boolOption = true;
				break;
			}
			case "Нет": {
				boolOption = false;
				break;
			}
		}
		dispatch(setTrailer(boolOption));
	};

	const setDriverAgeHandler = (age: string) => {
		setDriverAge(age);
		const date = new Date();
		const birthDate = String(date.getFullYear() - Number(age)) + "-01-01";
		setProgressbarValue(80);
		dispatch(setBirthDate(birthDate));
	};

	const clearDriverAge = () => {
		setDriverAge("");
	};

	const setDriverExpHandler = (exp: string) => {
		setDriverExp(exp);
		const date = new Date();
		const startExpDate = String(date.getFullYear() - Number(exp)) + "-01-01";
		setProgressbarValue(90);
		dispatch(setExperienceDate(startExpDate));
	};

	const setYearWithoutAccidenceHandler = (year: string) => {
		setYearWithoutAccidence(year);
		const KBM = KBMS.find((item) => item.value === year) || {
			id: "",
			value: "",
		};
		dispatch(setKBM(KBM.id));
	};

	const clearDriverExp = () => {
		setDriverExp("");
	};

	const calculationRequest = async () => {
		setLoading(true);

		const linkData: any = {
			vehicleInfo: {
				registrationFlag: carVin ? 1 : 0,
				brandName: carMark,
				modelName: carModel,
				year: carYear,
				modification: carModification,
			},
			ownerInfo: {
				address: {
					ownerRegistrationCity: city,
				},
			},
			multiDriveFlag: isMultidrive ? 1 : 0,
		};

		if (carGRZ) linkData.vehicleInfo.vehicleRegistrationNumber = carGRZ;
		if (carVin) linkData.vehicleInfo.vehicleIdValue = carVin;
		if (carVin) linkData.vehicleInfo.vehicleIdType = "VIN";

		await dispatch(setContactInfo(linkData));

		await axios
			.post(axiosBasicPath + "/api/simple_osago_calc/", {
				...stateOsagoReqFormData,
			})
			.then((response) => {
				dispatch(setCalculationResult(response.data.insuranceBonus));
				dispatch(setCalculationErrorText(response.data.errorText));
			})
			.then(() => {
				router.push("osago-result");
			});
	};

	useEffect(() => {
		if (isMultidrive) setProgressbarValue(90);
		if (!isMultidrive && carModification !== "") setProgressbarValue(70);
		dispatch(setMultidriveReducer(isMultidrive));
	}, [isMultidrive, carModification, dispatch]);

	useEffect(() => {
		if (osagoStep === 3 && driverAge === "" && driverExp === "")
			setProgressbarValue(80);
	}, [osagoStep, driverAge, driverExp]);

	return (
		<BaseLayout>
			{showGRZError ? (
				<React.Fragment>
					<TopHeader
						type='burger'
						backButtonNeed={true}
						clickCloseButtonHandler={closeGRZErrorHandler}
					></TopHeader>
					<ErrorGrz />
				</React.Fragment>
			) : (
				<React.Fragment>
					<TopHeader
						type={osagoStep === 1 ? "classic" : "classic-osago2"}
						backButtonClickHandler={() => setOsagoStep(osagoStep - 1)}
					></TopHeader>

					<ScrollDownIconWidget />
					<TextComponent
						fontWeight={500}
						fontSize={22}
						textTransform={"initial"}
						margin={"0 0 0.2em 0"}
					>
						Калькулятор eОСАГО
					</TextComponent>

					<ProgressBarWidget value={progressbarValue}></ProgressBarWidget>

					<div className='mt-1'></div>
					<div className={osagoStep === 1 ? "" : "d-none"}>
						<Osago0Step
							grzValue={carGRZ}
							setGrzValue={setCarGRZHandler}
							onClickButton={reqGRZHandler}
							loadingButton={grzLoading}
							onClickMenuItem={clickSelfEnteringHandler}
						></Osago0Step>
					</div>
					<div className={osagoStep === 2 ? "" : "d-none"}>
						<Osago1Step
							preload={osago1preload}
							city={city}
							cities={cities}
							carMark={carMark}
							carModel={carModel}
							carYear={carYear}
							carModification={carModification}
							pricepPresence={pricepPresence}
							isMultidrive={isMultidrive}
							vehicleMarkOptions={vehicleMarkOptions}
							carModelsLabels={carModelsLabels}
							carYearsList={carYearsList}
							carModificationsList={carModificationsList}
							isPricepList={isPricepList}
							setCityHandler={setCityHandler}
							setCarMarkHandler={setCarMarkHandler}
							setCarModelHandler={setCarModelHandler}
							setCarYearHandler={setCarYearHandler}
							setCarModificationHandler={setCarModificationHandler}
							setPricepPresenceHandler={setPricepPresenceHandler}
							setIsMulridrive={setIsMulridrive}
						></Osago1Step>
					</div>
					<div className={osagoStep === 3 ? "" : "d-none"}>
						<Osago2Step
							driverAge={driverAge}
							driverExp={driverExp}
							yearWithoutAccidence={yearWithoutAccidence}
							setDriverAgeHandler={setDriverAgeHandler}
							setDriverExpHandler={setDriverExpHandler}
							setYearWithoutAccidence={setYearWithoutAccidenceHandler}
							KBMS={KBMS}
							clearDriverAge={clearDriverAge}
							clearDriverExp={clearDriverExp}
						></Osago2Step>
					</div>

					<div className='mt-3'></div>

					<div>
						{!isMultidrive && osagoStep === 2 ? (
							<DoubleBorderWidget>
								<LoadingButtonComponent
									loading={false}
									disabled={!carModificationSelected || city === ""}
									onClick={() => setOsagoStep(3)}
								>
									Далее
								</LoadingButtonComponent>
							</DoubleBorderWidget>
						) : (
							""
						)}
						{isMultidrive ? (
							<>
								<DoubleBorderWidget>
									<LoadingButtonComponent
										loading={loading}
										disabled={!carModificationSelected || city === ""}
										onClick={calculationRequest}
									>
										Рассчитать
									</LoadingButtonComponent>
								</DoubleBorderWidget>

								<Box mt={8}></Box>
							</>
						) : (
							""
						)}

						{!isMultidrive && osagoStep === 3 ? (
							<>
								<DoubleBorderWidget>
									<LoadingButtonComponent
										loading={loading}
										disabled={driverAge === "" || driverExp === ""}
										onClick={calculationRequest}
									>
										Рассчитать
									</LoadingButtonComponent>
								</DoubleBorderWidget>

								<Box mt={8}></Box>
							</>
						) : (
							""
						)}
					</div>

					<Box mt={18}></Box>
				</React.Fragment>
			)}
		</BaseLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const vehicleMarksRes = await axios.get(
		"http://backend:8000/api/list_mark/2/"
	);

	// const vehicleMarksRes = await axios.get(
	// 	"https://telegasale.alfastrah.ru/backend/api/list_mark/2/"
	// );

	const vehicleMarks: vehicleMark[] = vehicleMarksRes.data;
	return { props: { vehicleMarks } };
};

export default OsagoForm;
