import React, { FunctionComponent } from "react";
import { ButtonComponent } from "../components/button-component";
import { TextComponent } from "../components/text-component";
import { InputAutocompleteComponent } from "../components/input-autocomplete-component";
import { StepHeadingWidget } from "../widgets/step-heading-widget";
import { SelectComponent } from "../components/select-component";
import { InputSelectComponent } from "../components/input-select-component";

interface isPricepList {
	id: number;
	value: string;
}

interface osago1Step {
	preload: boolean;
	city: string;
	cities: string[];
	carMark: string;
	carModel: string;
	carYear: string;
	carModification: string;
	pricepPresence: string;
	isMultidrive: boolean;
	vehicleMarkOptions: string[];
	carModelsLabels: string[];
	carYearsList: string[];
	carModificationsList: string[];
	isPricepList: isPricepList[];
	setCityHandler(value: string): any;
	setCarMarkHandler(value: string): any;
	setCarModelHandler(value: string): any;
	setCarYearHandler(value: string): any;
	setCarModificationHandler(value: string): any;
	setPricepPresenceHandler(value: string): any;
	setIsMulridrive(value: boolean): any;
}

export const Osago1Step: FunctionComponent<osago1Step> = ({
	preload = false,
	city,
	cities,
	carMark,
	carModel,
	carYear,
	carModification,
	isMultidrive,
	vehicleMarkOptions,
	carModelsLabels,
	carYearsList,
	carModificationsList,
	setCityHandler,
	setCarMarkHandler,
	setCarModelHandler,
	setCarYearHandler,
	setCarModificationHandler,
	setIsMulridrive,
}) => {
	return (
		<React.Fragment>
			<StepHeadingWidget>Введите данные об автомобиле</StepHeadingWidget>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Марка
			</TextComponent>

			<InputAutocompleteComponent
				placeholder='Марка'
				options={vehicleMarkOptions}
				inputValue={carMark}
				onInputChange={setCarMarkHandler}
			></InputAutocompleteComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Модель
			</TextComponent>

			<InputSelectComponent
				placeholder='Модель'
				disabled={carModelsLabels.length < 1}
				options={carModelsLabels}
				inputValue={carModel}
				onChange={setCarModelHandler}
			></InputSelectComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Год выпуска
			</TextComponent>

			<InputSelectComponent
				placeholder='Год выпуска'
				disabled={carYearsList.length < 1}
				options={carYearsList}
				inputValue={carYear}
				onChange={setCarYearHandler}
			></InputSelectComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Модификация
			</TextComponent>

			<InputSelectComponent
				placeholder='Модификации'
				disabled={carModificationsList.length < 1}
				options={carModificationsList}
				inputValue={carModification}
				onChange={setCarModificationHandler}
			></InputSelectComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Город регистрации собственника автомобиля
			</TextComponent>

			<InputAutocompleteComponent
				placeholder='Город'
				options={cities}
				inputValue={city}
				onInputChange={setCityHandler}
			></InputAutocompleteComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={"#696969"}
				margin={"0.5em 0.5em 0 0"}
			>
				Количество водителей
			</TextComponent>

			<div className='row' style={{ paddingTop: "8px" }}>
				<div className='col-6'>
					<ButtonComponent
						disabled={!carModification}
						className={
							!isMultidrive ? "button-component-red" : "button-component-gray"
						}
						height={30}
						borderRadius='15px'
						onClick={() => setIsMulridrive(false)}
					>
						1 и более
					</ButtonComponent>
				</div>
				<div className='col-6'>
					<ButtonComponent
						disabled={!carModification}
						className={
							isMultidrive ? "button-component-red" : "button-component-gray"
						}
						height={30}
						borderRadius='15px'
						onClick={() => setIsMulridrive(true)}
					>
						Неограниченно
					</ButtonComponent>
				</div>
			</div>
		</React.Fragment>
	);
};
