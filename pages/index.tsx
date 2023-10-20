import type { NextPage } from "next";
import React, { useState } from "react";
import { TextComponent } from "../components/text-component";
import { BaseLayout } from "../widgets/base-layout";
import { MenuCell } from "../widgets/menu-cell";
import { TopHeader } from "../widgets/top-header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { load } from "../features";
import Image from "next/image";
import { ButtonComponent } from "../components/button-component";

interface isLoaded {
	isLoaded: boolean;
}

interface loading {
	loadingReducer: isLoaded;
}

interface isLoaded {
	loading: loading;
}

const Home: NextPage = () => {
	const dispatch = useDispatch();
	const [rocketLeft, setRocketLeft] = useState("75%");
	const [rocketTop, setRocketTop] = useState("20%");
	const [imgLoaded, setImgLoaded] = useState(false);
	const [firstLineClass, setFirstLineClass] = useState("");
	const [secondLineClass, setSecondLineClass] = useState("");
	const [thirdLineClass, setThirdLineClass] = useState("");
	const isLoaded = useSelector(
		(state: loading) => state?.loadingReducer?.isLoaded
	);

	const videoLoadedHandler = () => {
		setTimeout(() => {
			dispatch(load(true));
		}, 4000);
	};

	const startRocketAnimation = () => {
		setRocketLeft("55%");
		setRocketTop("30%");
		setImgLoaded(true);
		setFirstLineClass("typing-text");
		setSecondLineClass("typing-text typing-text__delay-2s");
		setThirdLineClass("typing-text typing-text__delay-2s");
		videoLoadedHandler();
	};

	return (
		<BaseLayout>
			<div
				style={{
					opacity: isLoaded ? 1 : 0,
					transition: "opacity 0.2s ease",
					zIndex: 3,
					overflow: "hidden",
					paddingBottom: "76px",
				}}
			>
				<TopHeader type="mainpage"></TopHeader>

				<div>
					<TextComponent
						color="#FFFFFF"
						fontWeight={700}
						fontSize={24}
						textAlign="center"
					>
						Добро пожаловать!
					</TextComponent>
					<TextComponent
						textAlign="center"
						width="250px"
						fontSize={14}
						margin="0.5em auto"
						fontWeight={400}
						color="#FFFFFF"
					>
						Здесь вы можете узнать больше деталей о нашем бизнесе и
						выбрать наиболее интересную опцию для инвестиций.
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
						labelWeight={700}
						imgSize={48}
						src={require("assets/img/Become.svg")}
						alt={"Car"}
						textMargin="6px"
						background={"#33363F"}
						justifyContent="center"
						alignItems="start"
						flexDirection="column"
						textFontSize={12}
						labelFontSize={16}
						label="Стать акционером"
					>
						И получать от
						<b style={{ color: "#7DF17B" }}> 12% до 25% годовых </b>
						в валюте
					</MenuCell>
					<MenuCell
						width={"164px"}
						height={"202px"}
						href={"formats"}
						imgSize={60}
						labelWeight={700}
						src={require("assets/img/BuyAuto.svg")}
						alt={"Key"}
						background={"#33363F"}
						textMargin="6px"
						justifyContent="center"
						alignItems="start"
						flexDirection="column"
						textFontSize={12}
						top={15}
						labelFontSize={16}
						label="Купить авто"
					>
						И передать под наше управление в рассрочку с доходностью{" "}
						<b style={{ color: "#7DF17B" }}>12% годовых </b>в валюте
					</MenuCell>
					<MenuCell
						width={"335px"}
						height={"60px"}
						href={"partner"}
						textMargin="10px"
						imgSize={28}
						labelWeight={500}
						src={require("assets/img/Why.svg")}
						alt="partner"
						background={"#33363F"}
						flexDirection="row"
						labelFontSize={16}
						justifyContent="start"
						label="Почему мы?"
					></MenuCell>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "flex-start",
							height: "100px",
						}}
					>
						<p style={{ textAlign: "center" }}>
							Создано с wame.tools
						</p>
					</div>
				</div>
				<div
					style={{
						margin: "auto",
						position: "fixed",
						left: "50%",
						transform: "translateX(-50%)",
						bottom: 0,
					}}
					className="mobile-cells-wrapper py-3"
				>
					<ButtonComponent
						className="calculate-button"
						href="calculate"
					>
						Рассчитай потенциальную доходность
					</ButtonComponent>
					<ButtonComponent href="sell">
						Оставить заявку
					</ButtonComponent>
					di
				</div>
			</div>
			<div
				className="pt-4"
				style={{
					position: "fixed",
					top: 50,
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
							width: 308,
							height: 308,
							borderRadius: "100%",
							background: "#7DF17B",
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
							width={580}
							height={660}
							alt={"rocket"}
							src={require("assets/img/CarMain.png")}
							onLoadingComplete={startRocketAnimation}
						></Image>
					</div>
				</div>

				<div
					style={{
						position: "absolute",
						left: "45%",
						top: 400,
						background: "#33363F",
						border: "0.5px solid rgba(0, 0, 0, 0.07)",
						borderRadius: "0px 8px 8px 8px",
						color: "#fff",
						padding: "13px 16px 18px 16px",
						width: 200,
						zIndex: 10,
						opacity: imgLoaded ? 1 : 0,
						transition: "opacity 0.2s ease",
					}}
				>
					<div className={firstLineClass}>Инвестируй в бизнес</div>
					<div className={secondLineClass}>по аренде авто</div>
					<div className={thirdLineClass}>доходностью до 25%</div>
				</div>
			</div>
		</BaseLayout>
	);
};

export default Home;
