import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import Image from "next/image"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"

const About: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader type="numbers"></TopHeader>
			<TextComponent fontSize={22} fontWeight={500} color="#fff">
				ОАЭ в цифрах - Экспаты
			</TextComponent>
			<div className="mt-3"></div>
			<div className="about-cell">
				<div className="cell-icon">
					<Image alt="phone" src={require("assets/img/People.svg")} />
				</div>
				<div className="cell-text">
					<h1
						style={{
							color: "#7DF17B",
							fontSize: "26px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						9 МЛН ЧЕЛ.
					</h1>
					<p
						style={{
							fontSize: "12px",
							color: "#fff"
						}}
					>
						Или 90% всех жителей ОАЭ составляют экспаты
					</p>
				</div>
			</div>

			<div className="about-cell">
				<div className="cell-icon">
					<Image alt="phone" src={require("assets/img/Calendar.svg")} />
				</div>
				<div className="cell-text">
					<h1
						style={{
							color: "#7DF17B",
							fontSize: "26px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						4,4 ГОДА
					</h1>
					<p
						style={{
							fontSize: "12px",
							color: "#fff"
						}}
					>
						Средний срок нахождения экспата
						в ОАЭ (большая часть не видит смысла
						в покупке личного автомобиля)
					</p>
				</div>
			</div>

			<div className="about-cell">
				<div className="cell-icon">
					<Image alt="phone" src={require("assets/img/PhoneMoney.svg")} />
				</div>
				<div className="cell-text">
					<h1
						style={{
							color: "#7DF17B",
							fontSize: "26px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						~ 50%
					</h1>
					<p
						style={{
							fontSize: "12px",
							color: "#fff"
						}}
					>
						Переплачивают клиенты при выборе такси в пользу
						аренды авто (при пробеге 2 тыс. км в мес. и сроке аренды 1+ мес.)
					</p>
				</div>
			</div>
		</BaseLayout>
	)
}

export default About
