import React, { FunctionComponent } from "react";
import { InputComponent } from "../components/input-component";
import { SelectComponent } from "../components/select-component";
import { TextComponent } from "../components/text-component";

import { Osago2StepInterface } from "../interfaces";
import { StepHeadingWidget } from "../widgets/step-heading-widget";

export const Osago2Step: FunctionComponent<Osago2StepInterface> = ({
	driverAge,
	driverExp,
	yearWithoutAccidence,
	setDriverAgeHandler,
	setDriverExpHandler,
	setYearWithoutAccidence,
	KBMS,
	clearDriverAge,
	clearDriverExp,
}) => {
	return (
		<React.Fragment>
			<StepHeadingWidget>Введите данные о водителе</StepHeadingWidget>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Минимальный возраст водителя
			</TextComponent>

			<InputComponent
				type='number'
				value={driverAge}
				setValue={setDriverAgeHandler}
				removeValue={clearDriverAge}
				placeholder='Введите вручную'
			></InputComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Минимальный стаж водителя
			</TextComponent>

			<InputComponent
				type='number'
				value={driverExp}
				setValue={setDriverExpHandler}
				removeValue={clearDriverExp}
				placeholder='Стаж водителя'
			></InputComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Сколько лет не было аварий по Вашей вине? (КБМ)
			</TextComponent>

			<SelectComponent
				value={yearWithoutAccidence}
				values={KBMS}
				setValue={setYearWithoutAccidence}
			></SelectComponent>
		</React.Fragment>
	);
};
