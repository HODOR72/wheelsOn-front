import React, { FunctionComponent } from "react";
import { Box, Grid } from "@mui/material";
import { GrzInputWidget } from "../widgets/grz-input-widget";
import { TextComponent } from "../components/text-component";
import { DoubleBorderWidget } from "../widgets/double-border-widget";
import { LoadingButtonComponent } from "../components/loading-button-component";
import { StepHeadingWidget } from "../widgets/step-heading-widget";

interface grzInputWidget {
	grzValue: string;
	setGrzValue(value: string): any;
	onClickButton(): any;
	onClickMenuItem(): any;
	loadingButton: boolean;
}

export const Osago0Step: FunctionComponent<grzInputWidget> = ({
	grzValue,
	setGrzValue,
	onClickButton,
	onClickMenuItem,
	loadingButton,
}) => {
	const onClickHandler = () => {
		onClickButton();
	};
	return (
		<React.Fragment>
			<StepHeadingWidget>Введите номер автомобиля</StepHeadingWidget>

			<Box sx={{ paddingLeft: 2 }}>
				<TextComponent fontSize={13} fontWeight={400} color={"#696969"}>
					для ускорения предварительного расчета стоимости полиса ОСАГО
				</TextComponent>

				<Box className='mt-3'></Box>

				<GrzInputWidget
					grzValue={grzValue}
					setGrzValue={setGrzValue}
				></GrzInputWidget>

				<Box className='mt-3'></Box>

				<Box onClick={onClickMenuItem}>
					<TextComponent
						fontSize={13}
						fontWeight={400}
						color={"#696969"}
						textDecoration={"underline"}
					>
						Если у автомобиля отстутствует номер на текущий момент, введите
						данные в ручном режиме
					</TextComponent>
				</Box>
			</Box>
			<Box className='mt-3'></Box>

			<DoubleBorderWidget>
				<LoadingButtonComponent
					loading={loadingButton}
					onClick={onClickHandler}
				>
					Ввести
				</LoadingButtonComponent>
			</DoubleBorderWidget>

			<Box mt={5}></Box>
		</React.Fragment>
	);
};
