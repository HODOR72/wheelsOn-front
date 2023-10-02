// @ts-nocheck
import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import Image from "next/image"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { useState } from "react"

const About: NextPage = () => {
	const [activePage, setActivePage] = useState<number>(0)
	const maxPage = 2

	const handleChangePage = (page: number) => {
		if (page < 0) {
			setActivePage(0)
		} else if (page > maxPage) {
			setActivePage(2)
		} else {
			setActivePage(page)
		}
	}

	return (
		<BaseLayout>
			<TopHeader type="numbers"></TopHeader>
			{activePage === 0 && (
				<>
					<TextComponent
						fontSize={22}
						fontWeight={500}
						color="#fff"
						textAlign="center"
					>
						ОАЭ в цифрах - Экспаты
					</TextComponent>
					<div className="mt-3"></div>
					<div className="about-cell">
						<div className="cell-icon">
							<Image
								alt="phone"
								src={require("assets/img/People.svg")}
								draggable={false}
								width={50}
								height={50}
							/>
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
									color: "#fff",
								}}
							>
								Или 90% всех жителей ОАЭ составляют экспаты
							</p>
						</div>
					</div>

					<div className="about-cell">
						<div className="cell-icon">
							<Image
								alt="phone"
								src={require("assets/img/Calendar.svg")}
								draggable={false}
							/>
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
									color: "#fff",
								}}
							>
								Средний срок нахождения экспата в ОАЭ (большая часть не видит
								смысла в покупке личного автомобиля)
							</p>
						</div>
					</div>

					<div className="about-cell">
						<div className="cell-icon">
							<Image
								alt="phone"
								src={require("assets/img/PhoneMoney.svg")}
								draggable={false}
								width={50}
								height={50}
							/>
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
									color: "#fff",
								}}
							>
								Переплачивают клиенты при выборе такси в пользу аренды авто (при
								пробеге 2 тыс. км в мес. и сроке аренды 1+ мес.)
							</p>
						</div>
					</div>
				</>
			)}
			{activePage === 1 && (
				<>
					<TextComponent
						fontSize={22}
						fontWeight={500}
						color="#fff"
						textAlign="center"
					>
						ОАЭ в цифрах - Туристы
					</TextComponent>
					<div className="mt-3"></div>
					<div className="about-cell">
						<div className="cell-icon">
							<Image
								alt="phone"
								src={require("assets/img/People.svg")}
								width={50}
								height={50}
							/>
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
								14 млн
							</h1>
							<p
								style={{
									fontSize: "12px",
									color: "#fff",
								}}
							>
								Туристов посетило Дубай в 2022 г. (самый посещаемый город в
								мире)
							</p>
						</div>
					</div>
					<div className="about-cell">
						<div className="cell-icon">
							<Image
								alt="phone"
								src={require("assets/img/Calendar.svg")}
								width={50}
								height={50}
							/>
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
								$32 млрд
							</h1>
							<p
								style={{
									fontSize: "12px",
									color: "#fff",
								}}
							>
								Потратили туристы в 2022 г.
							</p>
						</div>
					</div>

					<div className="about-cell">
						<div className="cell-icon">
							<Image
								alt="phone"
								src={require("assets/img/PhoneMoney.svg")}
								draggable={false}
								width={50}
								height={50}
							/>
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
								$1 млрд
							</h1>
							<p
								style={{
									fontSize: "12px",
									color: "#fff",
								}}
							>
								Составили расходы на аренду автомобилей
							</p>
						</div>
					</div>
				</>
			)}
			{activePage === 2 && (
				<>
					<TextComponent
						fontSize={22}
						fontWeight={500}
						color="#fff"
						textAlign="center"
					>
						Динамика рынка
					</TextComponent>
					<div style={{marginTop: 46}}></div>
					<div
						style={{
							display: "flex",
							alignItems: "end",
							justifyContent: "space-between",
						}}
					>
						<Image
							alt="classes"
							src={require("assets/img/classes.svg")}
							priority
							draggable={false}
						/>
						<Image
							alt="dynamic"
							src={require("assets/img/dynamic.svg")}
							priority
							draggable={false}
						/>
					</div>
					<p style={{ color: "white", paddingTop: 40, fontSize: 11 }}>
						* рост рынка: на 50% за 4 года
						<br /> ** рост премиум (целевого) сегмента: на 70% за 4 года
					</p>
				</>
			)}
			<div style={{ margin: "auto" }}>
				<div style={{ position: "relative", width: 150, margin: "0 auto" }}>
					<div
						style={{
							position: "absolute",
							zIndex: 5,
							top: 0,
							left: 0,
							width: "50%",
							height: "100%",
						}}
						onClick={() => handleChangePage(activePage - 1)}
					></div>
					<div
						style={{
							position: "absolute",
							zIndex: 5,
							top: 0,
							right: 0,
							width: "50%",
							height: "100%",
						}}
						onClick={() => handleChangePage(activePage + 1)}
					></div>
					<Image
						alt="phone"
						src={require("assets/img/button-slider.svg")}
						draggable={false}
					/>
				</div>
			</div>
		</BaseLayout>
	)
}

export default About
