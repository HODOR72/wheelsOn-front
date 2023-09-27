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
		| "homelink"
		| "loader"
	backButtonNeed?: boolean
	backButtonClickHandler?(): any
	clickCloseButtonHandler?(): any
}

export const TopHeader: FunctionComponent<TopHeader> = ({
	type = "classic",
	backButtonNeed = false,
	backButtonClickHandler = () => {},
	clickCloseButtonHandler = () => {},
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
						<Image
							src={require("assets/img/logo.svg")}
							alt={"logo"}
							width={160}
							height={40}
						></Image>
					</div>
				</div>
			) : (
				<div className={"row justify-content-between align-items-start mb-0"}>
					<div className="col-6">
						{type === "classic" || type === "classic-no-logo" ? (
							<IconButton sx={{ paddingLeft: 0 }} onClick={goBack}>
								<ArrowBackIosRoundedIcon
									sx={{
										color: "#9F6BC9",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent fontSize={17} color="#9F6BC9">
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
										color: "#9F6BC9",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent fontSize={17} color="#9F6BC9">
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
										color: "#9F6BC9",
										fontSize: 23,
									}}
								></ArrowBackIosRoundedIcon>
								<TextComponent
									fontSize={17}
									color="#9F6BC9"
									textTransform="initial"
								>
									На главный экран
								</TextComponent>
							</IconButton>
						) : (
							""
						)}

						{type === "burger" || type === "mainpage" ? (
							<Image
								src={require("assets/img/logo.svg")}
								alt={"logo"}
								width={160}
								height={40}
							></Image>
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
									color: "#9F6BC9",
									float: "right",
									padding: 0,
								}}
								onClick={goToBurger}
							>
								<Image
									src={require("assets/img/burger-lines.svg")}
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
										src={require("assets/img/logo-square.svg")}
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
							<IconButton
								sx={{
									width: 50,
									height: 50,
									color: "#9F6BC9",
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
						) : (
							""
						)}
					</div>
				</div>
			)}
		</div>
	)
}
