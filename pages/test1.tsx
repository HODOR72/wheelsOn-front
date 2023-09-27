import type { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { List } from "@mui/material"
import { TestListItem } from "../components/test-list-item"
import { useState } from "react"
import { ButtonComponent } from "../components/button-component"
import { DoubleBorderWidget } from "../widgets/double-border-widget"
import { TestProgress } from "../widgets/test-progress"
import { setFirstStep } from "../features/testVictorina"

import { state } from "../interfaces"

const Test1: NextPage = () => {
	const firstStepVaiant = useSelector(
		(state: state) => state.testVictorina.steps.first
	)
	const dispatch = useDispatch()
	const router = useRouter()
	const [currentVariant, setCurrentVariant] = useState(firstStepVaiant)

	const setVariantHandler = (symbol: string) => {
		setCurrentVariant(symbol)
	}

	const variants = [
		{
			id: 1,
			symbol: "A",
			text: "Да",
		},
		{
			id: 2,
			symbol: "B",
			text: "Нет",
		},
		{ id: 3, symbol: "C", text: "Соберу команду" },
	]

	const goNext = async () => {
		await dispatch(setFirstStep(currentVariant))
		
		router.push("test2")
	}

	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<div className="row align-items-">
				<div className="col-9">
					<TextComponent fontSize={12} color={"#696969"}>
						Запись на футбольный турнир
					</TextComponent>
				</div>
				<div className="col-3 d-flex justify-content-end">
					{currentVariant === "" ? (
						<TestProgress label="1" value={33}></TestProgress>
					) : (
						<DoubleBorderWidget
							padding={2}
							height={40}
							disabled={currentVariant === ""}
						>
							<ButtonComponent
								height={30}
								onClick={goNext}
								disabled={currentVariant === ""}
							>
								Далее
							</ButtonComponent>
						</DoubleBorderWidget>
					)}
				</div>
			</div>
			<div className="mt-2"></div>
			<TextComponent fontSize={14} fontWeight={500}>
				Есть ли у вас готовая команда 6 человек + 6 запасных?
			</TextComponent>
			<div className="mt-3"></div>
			{/* <div className="d-flex justify-content-center">
				<ImageComponent
					src={require("assets/img/var1-3.png")}
					width={320}
					showLoading
					height={186}
					objectFit={"cover"}
					alt="pic"
					borderRadius={16}
				></ImageComponent>
			</div> */}
			<div className="mt-3"></div>
			<List>
				{variants.map(variant => (
					<TestListItem
						text={variant.text}
						symbol={variant.symbol}
						key={variant.id}
						state={currentVariant === variant.symbol ? "active" : "passive"}
						setVariant={setVariantHandler}
					></TestListItem>
				))}
			</List>

			<div className="mt-3"></div>
		</BaseLayout>
	)
}

export default Test1
