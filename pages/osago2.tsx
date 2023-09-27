import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { BaseLayout } from '../widgets/base-layout';
import { TextComponent } from '../components/text-component';
import { TopHeader } from '../widgets/top-header';
import { StepsWidgets } from '../widgets/steps-widget';
import { ButtonComponent } from '../components/button-component';
import { InputComponent } from '../components/input-component';
import { OsagoHeader } from '../widgets/osago-header';
import { DoubleBorderWidget } from '../widgets/double-border-widget';
import { SelectComponent } from '../components/select-component';
import moment from 'moment';

const Osago2: NextPage = () => {
	const router = useRouter();

	const todaysDate = moment(new Date());
	const todaysPlusThreeDate = moment(new Date()).add(3, 'd');

	const todaysFomatedDate = todaysDate.format('DD.MM.YYYY');
	const todaysPlusThreeFormattedDate = todaysPlusThreeDate.format('DD.MM.YYYY');

	const todayPlusThreeDate = new Date();

	const [driverAge, setDriverAge] = useState('');
	const [driverExp, setDriverExp] = useState('');
	const [yearWithoutAccidence, setYearWithoutAccidence] =
		useState('0 лет - 1.17');

	const KBMS = [
		{ id: '1.17', value: '0 лет - 1.17' },
		{ id: '1', value: '1 год - 1' },
		{ id: '0.91', value: '2 года - 0.91' },
		{ id: '0.83', value: '3 года – 0.83' },
		{ id: '0.78', value: '4 года - 0.78' },
		{ id: '0.74', value: '5 лет - 0.74' },
		{ id: '0.68', value: '6 лет - 0.68' },
		{ id: '0.63', value: '7 лет - 0.63' },
		{ id: '0.57', value: '8 лет - 0.57' },
		{ id: '0.52', value: '9 лет - 0.52' },
		{ id: '0.46', value: '10 лет и более – 0.46' },
	];

	const setDriverAgeHandler = (age: string) => {
		setDriverAge(age);
		const date = new Date();
		const birthDate = String(date.getFullYear() - Number(age)) + '-01-01';
	};

	const clearDriverAge = () => {
		setDriverAge('');
	};

	const setDriverExpHandler = (exp: string) => {
		setDriverExp(exp);
		const date = new Date();
		const startExpDate = String(date.getFullYear() - Number(exp)) + '-01-01';
	};

	const clearDriverExp = () => {
		setDriverExp('');
	};

	const setYearWithoutAccidenceHandler = (year: string) => {
		setYearWithoutAccidence(year);
	};

	const goToOsagoResult = () => {
		router.push('osago-result');
	};

	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<TextComponent
				fontWeight={500}
				fontSize={22}
				textTransform={'initial'}
				margin={'0 0 1em 0'}>
				Калькулятор eОСАГО
			</TextComponent>
			<StepsWidgets step={2}></StepsWidgets>

			<div className="mt-3"></div>

			<OsagoHeader>Введите данные водителя</OsagoHeader>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={'#696969'}
				margin={'2em 1em 0 0'}>
				Минимальный возраст водителя
			</TextComponent>

			<InputComponent
				type="number"
				value={driverAge}
				setValue={setDriverAgeHandler}
				removeValue={clearDriverAge}
				placeholder="Введите вручную"></InputComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={'#696969'}
				margin={'2em 1em 0 0'}>
				Минимальный стаж водителя
			</TextComponent>

			<InputComponent
				type="number"
				value={driverExp}
				setValue={setDriverExpHandler}
				removeValue={clearDriverExp}
				placeholder="Стаж водителя"></InputComponent>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={'#696969'}
				margin={'2em 1em 0 0'}>
				Сколько лет не было аварий по Вашей вине? (КБМ)
			</TextComponent>

			<SelectComponent
				value={yearWithoutAccidence}
				values={KBMS}
				setValue={setYearWithoutAccidence}></SelectComponent>

			<div className="mt-3"></div>

			<TextComponent
				fontSize={13}
				fontWeight={400}
				color={'#696969'}
				margin={'2em 1em 0 0'}
				textTransform="initial">
				Обратите внимание. Полис сроком действия на 1 год. Минимальная дата
				начала страхования +3 дня к текущей дате. Пример: при оформлении{' '}
				{todaysFomatedDate} полис начинает действовать с{' '}
				{todaysPlusThreeFormattedDate}
			</TextComponent>

			<div className="mt-3"></div>

			<DoubleBorderWidget>
				<ButtonComponent onClick={goToOsagoResult}>Расчитать</ButtonComponent>
			</DoubleBorderWidget>
		</BaseLayout>
	);
};

export default Osago2;
