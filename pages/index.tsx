import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { MenuCell } from "../widgets/menu-cell"
import { TopHeader } from "../widgets/top-header"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { load } from "../features"
import Image from "next/image"
import { useRouter } from "next/router"

interface isLoaded {
	isLoaded: boolean
}

interface loading {
	loadingReducer: isLoaded
}

interface isLoaded {
	loading: loading
}

const Home: NextPage = () => {
	const dispatch = useDispatch()
	const { push } = useRouter()
	const [rocketLeft, setRocketLeft] = useState("75%")
	const [rocketTop, setRocketTop] = useState("20%")
	const [imgLoaded, setImgLoaded] = useState(false)
	const [firstLineClass, setFirstLineClass] = useState("")
	const [secondLineClass, setSecondLineClass] = useState("")
	const isLoaded = useSelector(
		(state: loading) => state?.loadingReducer?.isLoaded
	)

	const handleSubmit = async () => {
		push("/test1")
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
		if (tg) {
			tg?.MainButton.show()
			tg.MainButton.color = "#9F6BC9"
			tg.MainButton.textColor = "#ffffff"

			tg?.MainButton.setText("Записаться")
			tg?.MainButton.enable()
		}

		return () => {
			tg?.MainButton.hide()
		}
	}, [])

	const videoLoadedHandler = () => {
		setTimeout(() => {
			dispatch(load(true))
		}, 4000)
	}

	const startRocketAnimation = () => {
		setRocketLeft("85%")
		setRocketTop("10%")
		setImgLoaded(true)
		setFirstLineClass("typing-text")
		setSecondLineClass("typing-text typing-text__delay-2s")
		videoLoadedHandler()
	}

	return (
		<BaseLayout>
			<div
				style={{
					opacity: isLoaded ? 1 : 0,
					transition: "opacity 0.2s ease",
					zIndex: 3,
					overflow: "hidden",
				}}
			>
				<TopHeader type="mainpage"></TopHeader>

				<div>
					<TextComponent fontWeight={500} fontSize={18} textAlign="center">
						Добро пожаловать!
					</TextComponent>
					<TextComponent
						textAlign="center"
						width="250px"
						margin="0.5em auto"
						color="#696969"
					>
						Первый <b>бесплатный</b> футбольный турнир для Digital-агентств и
						наших партнеров
					</TextComponent>
				</div>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						margin: "auto",
					}}
					className="pt-3 mobile-cells-wrapper"
				>
					<MenuCell
						width={"46%"}
						href={"info"}
						src={require("assets/img/information.png")}
						alt={"Car"}
						justifyContent="center"
						label="Общая информация"
					></MenuCell>
					<MenuCell
						width={"46%"}
						href={"formats"}
						src={require("assets/img/games.png")}
						alt={"Key"}
						justifyContent="center"
						label="Формат игр"
					></MenuCell>
					<MenuCell
						width={"46%"}
						href={"partner"}
						src={require("assets/img/partner.png")}
						alt="partner"
						justifyContent="center"
						label="Стать партнером"
					></MenuCell>
					<MenuCell
						width={"46%"}
						href={"map"}
						src={require("assets/img/geo.png")}
						alt={"Key"}
						justifyContent="center"
						label="Где играем"
					></MenuCell>
				</div>
				<div style={{ margin: "auto" }} className="mobile-cells-wrapper pt-5">
					<TextComponent textAlign="center" color="#696969">
						Создано в wame.tools с любовью для vitamin.tools
					</TextComponent>
				</div>
			</div>

			<div
				className="pt-4"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					opacity: isLoaded ? 0 : 1,
					transition: "opacity 0.2s ease",
					zIndex: isLoaded ? -1 : 1,
					display: isLoaded ? "none" : "block",
				}}
			>
				<div
					style={{
						opacity: imgLoaded ? 1 : 0,
						transition: "opacity 0.2s ease",
					}}
				>
					<TopHeader type="loader"></TopHeader>
				</div>

				<div
					style={{
						position: "relative",
						height: 265,
						left: -80,
						bottom: -250,
					}}
				>
					<div
						style={{
							opacity: imgLoaded ? 1 : 0,
							transition: "opacity 0.2s ease",
							left: -80,
							width: 450,
							height: 450,
							borderRadius: "100%",
							background: "#9f6bc9",
						}}
					></div>
				</div>

				<div
					style={{
						position: "absolute",
						top: rocketTop,
						left: rocketLeft,
						zIndex: 2,
						transition: "4s ease-in-out",
					}}
				>
					<div
						style={{
							opacity: imgLoaded ? 1 : 0,
							transition: "opacity 0.2s ease",
						}}
					>
						<Image
							priority
							width={46}
							height={47}
							alt={"rocket"}
							src={require("assets/img/ball.svg")}
							onLoadingComplete={startRocketAnimation}
						></Image>
					</div>
				</div>

				<div
					style={{
						position: "absolute",
						left: "45%",
						top: 120,
						background: "rgba(246, 245, 246, 0.8)",
						border: "0.5px solid rgba(0, 0, 0, 0.07)",
						borderRadius: "0px 8px 8px 8px",
						padding: "13px 16px 18px 16px",
						width: 200,
						zIndex: 1,
						opacity: imgLoaded ? 1 : 0,
						transition: "opacity 0.2s ease",
					}}
				>
					<div className={firstLineClass}>Футбольный турнир</div>
					<div className={secondLineClass}>23 сентября в Москве</div>
				</div>
			</div>
		</BaseLayout>
	)
}

export default Home
