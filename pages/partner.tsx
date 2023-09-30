import { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import Image from "next/image"
const InfoPage: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader type="noburger"></TopHeader>
			<div className="about-row">
				<TextComponent fontSize={22} fontWeight={700} textAlign="center" color="#fff">
					Почему мы
				</TextComponent>
				<Image alt="car" src={require("assets/img/Car-about.png")} width={180} />
			</div>
			<div className="mt-2"></div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="about-cell">
					<div className="cell-icon">
						<Image alt="phone" src={require("assets/img/Phone.svg")} />
					</div>
					<div className="cell-text">
						<h1
							style={{
								color: "#fff",
								fontSize: "13px",
								fontWeight: 500,
								marginBottom: "10",
							}}
						>
							Лучший продукт и сервис
						</h1>
						<p
							style={{
								fontSize: "8px",
								color: "#fff"
							}}
						>
							Единственное мобильное приложение на рынке ОАЭ
							с собственным автопарком в управлении и полностью
							автономным доступом к любому автомобилю.
						</p>
					</div>
				</div>
				<div className="about-cell">
					<div className="cell-icon">
						<Image alt="team" src={require("assets/img/Team.svg")} />
					</div>
					<div className="cell-text">
						<h1
							style={{
								color: "#fff",
								fontSize: "13px",
								fontWeight: 500,
								marginBottom: "10",
							}}
						>
							Опытная команда
						</h1>
						<p
							style={{
								fontSize: "8px",
								color: "#fff"
							}}
						>
							CEO и команда имеют опыт запуска с
							нуля и управления автопарком 10,000+
							автомобилей в СНГ, Европе и др. странах
						</p>
					</div>
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="about-cell">
					<div className="cell-icon">
						<Image alt="money" src={require("assets/img/USD.svg")} />
					</div>
					<div className="cell-text">
						<h1
							style={{
								color: "#fff",
								fontSize: "13px",
								fontWeight: 500,
								marginBottom: "10",
							}}
						>
							Операционные и технологические компетенции
						</h1>
						<p
							style={{
								fontSize: "8px",
								color: "#fff"
							}}
						>
							Все решения по закупке автомобилей,
							индивидуальных ставках аренды каждому
							клиенту принимаются при помощи системы
							скоринга и глубокой аналитики (BI)
							сбора данных аренды / продажи авто в ОАЭ
						</p>
					</div>
				</div>
				<div className="about-cell">
					<div className="cell-icon">
						<Image alt="star" src={require("assets/img/Star.svg")} />
					</div>
					<div className="cell-text">
						<h1
							style={{
								color: "#fff",
								fontSize: "13px",
								fontWeight: 500,
								marginBottom: "10",
							}}
						>
							Отличная юнит-экономика
						</h1>
						<p
							style={{
								fontSize: "8px",
								color: "#fff"
							}}
						>
							Эффективный маркетинг, высокие уровни утилизации и
							сильные операционные компетенции позволяют показывать
							доходность всего автопарка на уровне 35% годовых с учетом
							обесценения автомобиля
						</p>
					</div>
				</div>
			</div>
		</BaseLayout>
	)
}

export default InfoPage
