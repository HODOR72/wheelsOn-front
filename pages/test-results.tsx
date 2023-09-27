import type { NextPage } from "next"
import { useSelector } from "react-redux"

import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { TextComponent } from "../components/text-component"

import { state } from "../interfaces"
import React, { useEffect } from "react"
import axios from "axios"

async function sendMessageToUsers(chatId: string, message: string) {
	try {
		await axios.get(
			`https://api.telegram.org/bot${process.env.telegramToken}/sendMessage?chat_id=${chatId}&text=${message}`
		)
	} catch (error: any) {
		console.error(`Error sending message to user ${chatId}: ${error.message}`)
	}
}

const TestResults: NextPage = () => {
	const test = useSelector((state: state) => state.testVictorina.steps)

	useEffect(() => {
		if (test) {
			sendMessageToUsers(
				"464825074",
				`Новая заявка: 1: ${test.first} 2: ${test.second} 3: Компания: ${test.third.company}; Имя: ${test.third.name}; Телефон: ${test.third.phone}; Телеграм: ${test.third.telegram}`
			)
		}
	}, [test])

	return (
		<BaseLayout>
			<TopHeader type="homelink"></TopHeader>
			<div className="mt-3"></div>

			<div className="mt-3"></div>
			<TextComponent fontSize={12} color={"#696969"} textAlign="center">
				Результаты
			</TextComponent>
			<div className="mt-3"></div>
			<TextComponent fontSize={14} fontWeight={500} textAlign="center">
				Заявка на участие вашей команды успешно отправлена!
				<br />В ближайшее время с вами свяжется организатор
			</TextComponent>
		</BaseLayout>
	)
}

export default TestResults
