import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { useEffect, useState } from "react"
import { ButtonComponent } from "../components/button-component"
import { DoubleBorderWidget } from "../widgets/double-border-widget"
import { TestProgress } from "../widgets/test-progress"

import { InputComponent } from "../components/input-component"
import { setThirdStep } from "../features/testVictorina"

const Test3: NextPage = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [company, setCompany] = useState("")
	const [telegram, setTelegram] = useState("")
	const [phone, setPhone] = useState("")
	const [name, setName] = useState("")

	const goNext = async () => {
		await dispatch(setThirdStep({ company, telegram, phone, name }))

		router.push("test-results")
	}

	useEffect(() => {
		// @ts-ignore
		window.Telegram.WebApp.ready()
		// @ts-ignore
		const tg = window?.Telegram?.WebApp

		const user = tg.initDataUnsafe.user.username
		console.log(user)
		setTelegram(user)
	}, [])

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
					{company.trim() === "" ||
					telegram.trim() === "" ||
					name.trim() === "" ||
					phone.trim() === "" ? (
						<TestProgress label="3" value={100}></TestProgress>
					) : (
						<DoubleBorderWidget
							padding={2}
							height={40}
							disabled={
								company === "" || telegram === "" || name === "" || phone === ""
							}
						>
							<ButtonComponent
								height={30}
								onClick={goNext}
								disabled={
									company === "" ||
									telegram === "" ||
									name === "" ||
									phone === ""
								}
							>
								Далее
							</ButtonComponent>
						</DoubleBorderWidget>
					)}
				</div>
			</div>
			<div className="mt-3"></div>
			<TextComponent fontSize={14} fontWeight={500}>
				Название компании
			</TextComponent>
			<div className="mt-3"></div>
			<div
				style={{
					width: 320,
					height: 320,
					margin: "auto",
				}}
			>
				<div className="d-flex flex-wrap justify-content-between w-full">
					<InputComponent
						type="text"
						value={company}
						setValue={setCompany}
						// removeValue={clearDriverExp}
						placeholder="Компания"
					></InputComponent>
				</div>
				<div className="d-flex flex-wrap justify-content-between w-full">
					<InputComponent
						type="text"
						value={telegram}
						setValue={setTelegram}
						placeholder="Ссылка на телеграм"
					></InputComponent>
				</div>
				<div className="d-flex flex-wrap justify-content-between w-full">
					<InputComponent
						type="text"
						value={phone}
						setValue={setPhone}
						placeholder="Телефон для связи"
					></InputComponent>
				</div>
				<div className="d-flex flex-wrap justify-content-between w-full">
					<InputComponent
						type="text"
						value={name}
						setValue={setName}
						placeholder="Имя"
					></InputComponent>
				</div>
			</div>

			<div className="mt-3"></div>
		</BaseLayout>
	)
}

export default Test3
