import React, { FunctionComponent } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { IconButton } from "@mui/material"
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded"
import { TextComponent } from "../components/text-component"

interface TopHeader {
	type?:
	| "classic"
	| "classic-osago2"
	| "classic-no-logo"
	| "burger"
	| "mainpage"
	| "noburger"
	| "numbers"
	| "homelink"
	| "loader"
	backButtonNeed?: boolean
	backButtonClickHandler?(): any
	clickCloseButtonHandler?(): any
}

export const TopHeader: FunctionComponent<TopHeader> = ({
	type = "classic",
	backButtonNeed = false,
	backButtonClickHandler = () => { },
	clickCloseButtonHandler = () => { },
}) => {
	const router = useRouter()

	const goToBurger = () => {
		router.push("burger")
	}

	const goBack = () => {
		router.back()
	}

	const clickCloseIcon = () => {
		clickCloseButtonHandler()
	}

	const goHome = () => {
		router.push("/")
	}

	return (
		<div>
			{type === "loader" ? (
				<div className={"row justify-content-between align-items-start mb-0"}>
					<div className="col-12 d-flex justify-content-center">
						<Image alt="logo" src={require("assets/img/LogoMain.png")} width={48} height={48} />
					</div>
				</div>
			) : (
				<div className={"row justify-content-between align-items-start mb-0"}>
					<div className="col-6">
						{type === "classic" || type === "classic-no-logo" ? (
							<IconButton sx={{ paddingLeft: 0 }} onClick={goBack}>
								<ArrowBackIosRoundedIcon
									sx={{
										color: "#7DF17B",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent fontSize={17} color="#7DF17B">
									Назад
								</TextComponent>
							</IconButton>
						) : (
							""
						)}

						{type === "classic-osago2" ? (
							<IconButton
								sx={{ paddingLeft: 0 }}
								onClick={backButtonClickHandler}
							>
								<ArrowBackIosRoundedIcon
									sx={{
										color: "#7DF17B",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent fontSize={17} color="#7DF17B">
									Назад
								</TextComponent>
							</IconButton>
						) : (
							""
						)}

						{type === "numbers" ? (
							<div className="d-flex space-between mt-3">
								<div>
									<IconButton sx={{ paddingLeft: 0 }} onClick={goBack}>
										<ArrowBackIosRoundedIcon
											sx={{
												color: "#7DF17B",
												fontSize: 23,
											}}
										></ArrowBackIosRoundedIcon>
										<TextComponent fontSize={17} color="#7DF17B">
											Назад
										</TextComponent>
									</IconButton>
								</div>
								<div>
									<IconButton
										sx={{ width: 56, height: 56, padding: 0 }}
										onClick={goHome}
									>
										<Image
											src={require("assets/img/RoundLogo.svg")}
											width={56}
											height={56}
											alt="logo"
										></Image>
									</IconButton>
								</div>
							</div>
						) : (
							""
						)}

						{type === "noburger" ? (
							<IconButton sx={{ paddingLeft: 0 }} onClick={goBack}>
								<ArrowBackIosRoundedIcon
									sx={{
										color: "#7DF17B",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent fontSize={17} color="#7DF17B">
									Назад
								</TextComponent>
							</IconButton>
						) : (
							""
						)}

						{type === "homelink" ? (
							<IconButton sx={{ paddingLeft: 0, width: 200 }} onClick={goHome}>
								<ArrowBackIosRoundedIcon
									sx={{
										color: "#7DF17B",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent
									fontSize={17}
									color="#7DF17B"
									textTransform="initial"
								>
									На главный экран
								</TextComponent>
							</IconButton>
						) : (
							""
						)}
					</div>

					<div className="col-6">
						{type === "mainpage" ? (
							<IconButton
								sx={{
									width: 50,
									height: 50,
									color: "#7DF17B",
									float: "right",
									padding: 0,
								}}
								onClick={goToBurger}
							>
								<Image
									src={require("assets/img/Burger.svg")}
									alt="lines"
									width={50}
									height={50}
								></Image>
							</IconButton>
						) : (
							""
						)}

						{type === "classic" ? (
							<div className="d-flex justify-content-end">
								<IconButton
									sx={{ width: 40, height: 40, padding: 0 }}
									onClick={goHome}
								>
									<Image
										src={require("assets/img/Burger.svg")}
										width={40}
										height={40}
										alt="logo"
									></Image>
								</IconButton>
							</div>
						) : (
							""
						)}

						{type === "burger" ? (
							<div className="burger-header">
								<div className="header-row">
									<Image alt="logo" src={require("assets/img/MainLogo.svg")} width={88} height={88} />
								</div>
								<IconButton
									sx={{
										width: 50,
										height: 50,
										color: "#7DF17B",
										float: "right",
										padding: 0,
									}}
									onClick={() => (backButtonNeed ? clickCloseIcon() : goBack())}
								>
									<Image
										src={require("assets/img/burger-close.svg")}
										alt="close"
										width={50}
										height={50}
									></Image>
								</IconButton>
							</div>
						) : (
							null
						)}
					</div>
				</div>
			)}
		</div>
	)
}
