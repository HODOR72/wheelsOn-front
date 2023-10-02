import type { NextPage } from "next"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { ButtonComponent } from "../components/button-component"
import Image from "next/image"
import { TextComponent } from "../components/text-component"
import { useState } from "react"
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

const Sell: NextPage = () => {
	const [phoneNumber, setPhoneNumber] = useState("")
	const [name, setName] = useState("")

	const handleSendData = () => {
		setName('')
		setPhoneNumber('')
		sendMessageToUsers(
			"409314538",
			`Новая заявка! Имя: ${name}; Номер телефона: ${phoneNumber}`
		)
	}

	return (
		<>
			<BaseLayout>
				<div className="burger-list">
					<TopHeader type="burger"></TopHeader>

					<TextComponent
						color="#fff"
						fontWeight={500}
						fontSize={22}
						textAlign="center"
					>
						Оставить заявку и получить презентацию
					</TextComponent>
					<div className="contact-row">
						<TextComponent color="#fff" fontWeight={500} fontSize={14}>
							Имя
						</TextComponent>
						<input
							className="contact-input"
							type="text"
							placeholder="Введите ваше имя"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="contact-row">
						<TextComponent color="#fff" fontWeight={500} fontSize={14}>
							Контакты
						</TextComponent>
						<input
							className="contact-input"
							type="text"
							placeholder="Введите номер телефона"
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
						/>
					</div>
				</div>
			</BaseLayout>
			<div className="curve">
				<Image
					alt="curve"
					src={require("/assets/img/Bezier.svg")}
					width={1500}
					height={300}
				/>
				<div
					style={{ margin: "auto", marginTop: "20px", marginBottom: "20px" }}
					className="mobile-cells-wrapper"
				>
					<ButtonComponent onClick={handleSendData} disabled={phoneNumber.trim() == '' || name.trim() == ''}>
						Оставить заявку
					</ButtonComponent>
				</div>
			</div>
		</>
	)
}

export default Sell
