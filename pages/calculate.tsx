import type { NextPage } from "next";
import { TextComponent } from "../components/text-component";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useCallback } from "react";
import CheckboxBorderIcon from "../components/checkbox-border-icon";
import CheckboxIconChecked from "../components/checkbox-icon-checked";
import { ButtonComponent } from "../components/button-component";

interface IStake {
	stake: number;
}

const Calculate: NextPage = () => {
	const [years, setYears] = useState<number>(3); // Z
	const [capital, setCapital] = useState<number>(100_000); // X
	const [stake, setStake] = useState("");

	//years
	const handleYears = useCallback(
		(event: any, newYear: number | number[]) => {
			setYears(newYear as number);
		},
		[setYears]
	);

	const yearMarks = [
		{
			value: 3,
			label: "3 года",
		},
		{
			value: 4,
			label: "4 года",
		},
		{
			value: 5,
			label: "5 лет",
		},
	];

	//currency
	const handleCapital = useCallback(
		(event: any, newCapital: number | number[]) => {
			setCapital(newCapital as number);
		},
		[setCapital]
	);

	const capitalMarks = [
		{
			value: 100_000,
			label: "100,000",
		},
		{
			value: 5_000_000,
			label: "5,000,000",
		},
		{
			value: 10_000_000,
			label: "10,000,000",
		},
	];

	const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStake((event.target as HTMLInputElement).value);
	};

	let cleanIncome = Math.floor(capital * (Number(stake) / 100) * years);
	let everyYearIncome = Number(stake);
	let finalIncome = Number(stake) * years;

	return (
		<BaseLayout style={{ height: "100vh", padding: "0 20px" }}>
			<TopHeader type="numbers"></TopHeader>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<TextComponent
					fontSize={22}
					fontWeight={500}
					lineHeight="26.4px"
					color="#fff"
				>
					Рассчитайте вашу потенциальную доходность
				</TextComponent>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginTop: "30px",
					}}
				>
					<TextComponent fontSize={18} fontWeight={500} color="#fff">
						Срок инвестиций
					</TextComponent>
					<TextComponent
						fontSize={20}
						fontWeight={700}
						color="#7DF17B"
					>
						{years} {years <= 4 ? "года" : "лет"}
					</TextComponent>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "0 20px",
					}}
				>
					<Slider
						aria-label="years"
						value={years}
						step={1}
						min={3}
						max={5}
						valueLabelDisplay="off"
						marks={yearMarks}
						onChange={handleYears}
					/>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "30px",
				}}
			>
				<TextComponent fontSize={18} fontWeight={500} color="#fff">
					Размер инвестиций, USD
				</TextComponent>
				<TextComponent fontSize={20} fontWeight={500} color="#7DF17B">
					{Intl.NumberFormat("en-US").format(capital)}
				</TextComponent>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "0 20px",
				}}
			>
				<Slider
					aria-label="capital"
					value={capital}
					step={100_000}
					min={100_000}
					max={10_000_000}
					valueLabelDisplay="off"
					marks={capitalMarks}
					onChange={handleCapital}
				/>
			</div>
			<div
				style={{
					marginTop: "37px",
					paddingBottom: "30px",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<FormControl sx={{ paddingLeft: "5px", marginBottom: "15px" }}>
					<RadioGroup value={stake} onChange={handleRadio}>
						<FormControlLabel
							sx={{
								fontSize: "12px",
							}}
							control={
								<Radio
									sx={{
										color: "#fff",
										borderRadius: "6px",
										"&.Mui-checked": {
											color: "#7DF17B",
										},
									}}
									icon={<CheckboxBorderIcon />}
									checkedIcon={<CheckboxIconChecked />}
								/>
							}
							value={3}
							label="Валютный депозит"
						/>
						<FormControlLabel
							sx={{
								fontSize: "12px",
							}}
							control={
								<Radio
									sx={{
										color: "#fff",
										borderRadius: "6px",
										"&.Mui-checked": {
											color: "#7DF17B",
										},
									}}
									icon={<CheckboxBorderIcon />}
									checkedIcon={<CheckboxIconChecked />}
								/>
							}
							value={5.5}
							label="Корпоративные облигации (рейтинг AAA)"
						/>
						<FormControlLabel
							sx={{
								fontSize: "12px",
							}}
							control={
								<Radio
									sx={{
										color: "#fff",
										borderRadius: "6px",
										"&.Mui-checked": {
											color: "#7DF17B",
										},
									}}
									icon={<CheckboxBorderIcon />}
									checkedIcon={<CheckboxIconChecked />}
								/>
							}
							value={12}
							label="Договор рассрочки с W"
						/>
						<FormControlLabel
							sx={{
								fontSize: "12px",
							}}
							control={
								<Radio
									sx={{
										color: "#fff",
										borderRadius: "6px",
										"&.Mui-checked": {
											color: "#7DF17B",
										},
									}}
									icon={<CheckboxBorderIcon />}
									checkedIcon={<CheckboxIconChecked />}
								/>
							}
							value={20}
							label="Привилегированные акции W"
						/>
					</RadioGroup>
				</FormControl>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						background: "#33363F",
						padding: "20px",
						width: "100%",
						borderRadius: "10px",
						marginBottom: "26px",
					}}
				>
					<div className="final-row">
						<TextComponent
							fontWeight={400}
							fontSize={16}
							color="#b9b9b9"
						>
							Доход за {years} {years <= 4 ? "года" : "лет"}:
						</TextComponent>
						<TextComponent
							fontWeight={500}
							color="#fff"
							fontSize={16}
						>
							{Intl.NumberFormat("en-US").format(cleanIncome)}
						</TextComponent>
					</div>
					<div className="final-row">
						<TextComponent
							fontWeight={400}
							fontSize={16}
							color="#b9b9b9"
						>
							Ежегодная доходность (%):
						</TextComponent>
						<TextComponent
							fontWeight={500}
							color="#fff"
							fontSize={16}
						>
							{everyYearIncome}
						</TextComponent>
					</div>
					<div className="final-income">
						<TextComponent
							fontWeight={500}
							fontSize={18}
							color="#b9b9b9"
						>
							Итоговая доходность (%):
						</TextComponent>
						<TextComponent
							fontWeight={500}
							color="#7DF17B"
							fontSize={18}
						>
							{finalIncome}
						</TextComponent>
					</div>
				</div>
				<ButtonComponent href="sell">Оставить заявку</ButtonComponent>
			</div>
		</BaseLayout>
	);
};

export default Calculate;
