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
import { ButtonComponent } from "../components/button-component"

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

	return (
		<BaseLayout>
			<div
				style={{
					transition: "opacity 0.2s ease",
					zIndex: 3,
					overflow: "hidden",
				}}
			>
				<TopHeader type="mainpage"></TopHeader>

				<div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Image alt="logomain" src={require("assets/img/LogoMain.png")} width={88} height={88} />
					</div>
					<TextComponent color="#FFFFFF" fontWeight={500} fontSize={18} textAlign="center">
						Добро пожаловать!
					</TextComponent>
					<TextComponent
						textAlign="center"
						width="250px"
						margin="0.5em auto"
						color="#FFFFFF"
					>
						Здесь вы можете узнать больше деталей
						о нашем бизнесе и выбрать наиболее интересную
						опцию для инвестиций.
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
						width={"164px"}
						height={"202px"}
						href={"info"}
						imgSize={48}
						src={require("assets/img/Become.svg")}
						alt={"Car"}
						textMargin="6px"
						background={"#33363F"}
						justifyContent="center"
						alignItems="start"
						flexDirection="column"
						label="Стать акционером"
						underText="И получать от 12% до 25% годовых в валюте"
					></MenuCell>
					<MenuCell
						width={"164px"}
						height={"202px"}
						href={"formats"}
						imgSize={60}
						src={require("assets/img/BuyAuto.svg")}
						alt={"Key"}
						background={"#33363F"}
						textMargin="6px"
						justifyContent="center"
						alignItems="start"
						flexDirection="column"
						label="Купить авто"
						underText="И продать нам в рассрочку с доходностью 12% годовых в валюте"
					></MenuCell>
					<MenuCell
						width={"335px"}
						height={"60px"}
						href={"partner"}
						textMargin="10px"
						imgSize={28}
						textFontSize={16}
						src={require("assets/img/Why.svg")}
						alt="partner"
						background={"#33363F"}
						flexDirection="row"
						justifyContent="start"
						label="Почему мы?"
					></MenuCell>
				</div>
				<div style={{ margin: "auto" }} className="mobile-cells-wrapper pt-5">
					<ButtonComponent href="sell">Оставить заявку</ButtonComponent>
				</div>
			</div>
		</BaseLayout>
	)
}

export default Home
