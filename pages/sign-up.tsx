// @ts-nocheck

import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { useEffect, useState } from "react"
import { InputComponent } from "../components/input-component"
import { useRouter } from "next/router"
import axios from "axios"

async function sendMessageToUsers(chatId, message) {
	try {
		await axios.get(
			`https://api.telegram.org/bot${process.env.telegramToken}/sendMessage?chat_id=${chatId}&text=${message}`
		)
	} catch (error) {
		console.error(`Error sending message to user ${chatId}: ${error.message}`)
	}
}

const MapPage: NextPage = () => {
	const [company, setCompany] = useState("")
	const [telegram, setTelegram] = useState("")
	const [phone, setPhone] = useState("")
	const [name, setName] = useState("")
	const { push } = useRouter()

	const handleSubmit = async () => {
		await sendMessageToUsers(
			"464825074",
			`Компания: ${company + " "}\nТелеграм аккаунт: ${
				telegram + " "
			}\nНомер телефона: ${phone + " "}\nИмя:${name + " "}`
		)

		push("/")
	}

	useEffect(() => {
		// @ts-ignore
		const tg = window?.Telegram?.WebApp

		tg?.MainButton.onClick(handleSubmit)
		return () => {
			tg?.MainButton.offClick(handleSubmit)
		}
	}, [handleSubmit])

	useEffect(() => {
		// @ts-ignore
		const tg = window?.Telegram?.WebApp
		tg.MainButton.color = "#9F6BC9"
		tg.MainButton.textColor = "#ffffff"
		tg?.MainButton.show()

		tg?.MainButton.setText("Записаться")
		tg?.MainButton.enable()

		return () => {
			tg?.MainButton.hide()
		}
	}, [])

	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<TextComponent fontSize={22} fontWeight={500}>
				Оставить заявку
			</TextComponent>
			<div className="d-flex flex-wrap justify-content-between w-full">
				<InputComponent
					type="text"
					value={company}
					setValue={setCompany}
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
		</BaseLayout>
	)
}

export default MapPage
