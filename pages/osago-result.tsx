import React, { useState } from "react";
import type { NextPage } from "next";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { TextComponent } from "../components/text-component";
import { ButtonComponent } from "../components/button-component";
import { LoadingButtonComponent } from "../components/loading-button-component";
import { DoubleBorderWidget } from "../widgets/double-border-widget";
import { ProgressBarWidget } from "../widgets/progress-bar-widget";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { osagoReqFormData } from "../interfaces";
import axios from "axios";
import { setCalculationErrorText } from "../features/osagoCalculation";
import { useDispatch } from "react-redux";

interface calcResult {
	calcResult: string;
	errorText: string;
}

interface osagoCalculation {
	data: calcResult;
}

interface state {
	osagoCalculation: osagoCalculation;
	osagoReqFormData: osagoReqFormData;
}

interface linkData {
	contractInfo: {
		policyBeginDate: string;
		vehicleInfo: {
			vehicleRegistrationNumber?: string;
			registrationFlag: number;
			vehicleIdType?: string;
			vehicleIdValue?: string;
			category: number;
			type: string;
			brandName: string;
			modelName: string;
			year: number;
			modification: string;
		};
		ownerInfo: {
			address: {
				ownerRegistrationCity: string;
			};
		};
		multiDriveFlag: 1 | 0;
	};
}

const OsagoResult: NextPage = () => {
	const dispatch = useDispatch();

	const stateOsagoReqFormData = useSelector(
		(state: state) => state.osagoReqFormData.data
	);

	const stateFinalLink = useSelector(
		(state: any) => state.finalLinkForm.contractInfo
	);

	const [imgLoaded, setImgLoaded] = useState(false);
	const [loading, setLoading] = useState(false);

	const goToAlphaLink = async () => {
		setLoading(true);

		const linkData: linkData = {
			contractInfo: {
				policyBeginDate: stateOsagoReqFormData.contractInfo.policyBeginDate,
				vehicleInfo: {
					registrationFlag: stateFinalLink.vehicleInfo.vehicleRegistrationNumber
						? 1
						: 0,
					vehicleRegistrationNumber:
						stateFinalLink.vehicleInfo.vehicleRegistrationNumber,
					vehicleIdValue: stateFinalLink.vehicleInfo.vehicleIdValue,
					vehicleIdType: stateFinalLink.vehicleInfo.vehicleIdType,
					category: 2,
					type: "Легковой а/м",
					brandName: stateFinalLink.vehicleInfo.brandName,
					modelName: stateFinalLink.vehicleInfo.modelName,
					modification: stateFinalLink.vehicleInfo.modification,
					year: stateFinalLink.vehicleInfo.year,
				},
				ownerInfo: {
					address: {
						ownerRegistrationCity:
							stateOsagoReqFormData.contractInfo.ownerRegistrationCity,
					},
				},
				multiDriveFlag: stateOsagoReqFormData.contractInfo.multidrive ? 1 : 0,
			},
		};

		try {
			const goLinkResponse = await axios.post(
				"https://telegasale.alfastrah.ru/api/finalLink/",
				linkData
			);
			const link = goLinkResponse.data.link;
			setLoading(false);
			window.location.href = link;
		} catch (error) {
			dispatch(setCalculationErrorText(error));
			setLoading(false);
		}
	};

	const router = useRouter();
	const result =
		useSelector((state: state) => state.osagoCalculation.data.calcResult) || "";
	const error =
		useSelector((state: state) => state.osagoCalculation.data.errorText) || "";

	const goToCalc = () => {
		window.location.href =
			"https://www.alfastrah.ru/individuals/auto/eosago/calc/?dealer_id=atomic";
	};

	const goToOsagoCalc = () => {
		router.push("/osago-form");
	};
	return (
		<BaseLayout>
			<TopHeader type='homelink'></TopHeader>
			<TextComponent
				fontWeight={500}
				fontSize={22}
				textTransform={"initial"}
				margin={"0 0 1em 0"}
			>
				Предварительный расчет
			</TextComponent>

			<ProgressBarWidget value={100}></ProgressBarWidget>
			<div className='mt-3'></div>
			{error !== "Ошибка при вызове rsa-gate" ? (
				<div
					style={{ position: "relative", width: 300, margin: "auto" }}
					className='d-flex justify-content-center'
				>
					<div style={{ position: "absolute", left: 20, top: 90, zIndex: 2 }}>
						<TextComponent
							color={imgLoaded ? "#fff" : "#000"}
							fontSize={error === "Успешно" ? 28 : 20}
							fontWeight={700}
						>
							{error === "Успешно" ? (
								<React.Fragment>~ {result.replace(".", ",")} ₽ </React.Fragment>
							) : (
								"Ошибка сервера"
							)}
						</TextComponent>

						<TextComponent
							color={imgLoaded ? "#fff" : "#000"}
							fontSize={8}
							fontWeight={400}
							width={"190px"}
						>
							Цена не является офертой. Финальную стоимость можно узнать на
							сайте
						</TextComponent>
					</div>
					<Image
						style={{ position: "absolute", left: -5, top: -45 }}
						src={require("../assets/img/osago-result-img.png")}
						width={300}
						height={265}
						onLoadingComplete={() => setImgLoaded(true)}
						alt={"result"}
					></Image>
				</div>
			) : (
				<div className='pb-3'>
					<TextComponent
						fontSize={18}
						fontWeight={500}
						color='#cb243c'
						textAlign='justify'
					>
						Упс! Кажется, возникла ошибка. Пожалуйста, введите данные в
						калькулятор на сайте.
					</TextComponent>
				</div>
			)}

			{error === "Успешно" ? (
				<DoubleBorderWidget>
					<LoadingButtonComponent loading={loading} onClick={goToAlphaLink}>
						ПЕРЕЙТИ НА САЙТ
					</LoadingButtonComponent>
				</DoubleBorderWidget>
			) : (
				<React.Fragment></React.Fragment>
			)}

			{error === "Ошибка при вызове rsa-gate" ? (
				<DoubleBorderWidget>
					<ButtonComponent onClick={goToCalc}>перейти</ButtonComponent>
				</DoubleBorderWidget>
			) : (
				<React.Fragment></React.Fragment>
			)}

			{error !== "Успешно" && error !== "Ошибка при вызове rsa-gate" ? (
				<DoubleBorderWidget>
					<ButtonComponent onClick={goToOsagoCalc}>
						РАССЧИТАТЬ ЗАНОВО
					</ButtonComponent>
				</DoubleBorderWidget>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</BaseLayout>
	);
};

export default OsagoResult;
