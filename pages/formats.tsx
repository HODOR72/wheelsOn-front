// @ts-nocheck
import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { useState } from "react"
import { ImageComponent } from "../components/image-component"

const Formats: NextPage = () => {
	const [activeFormat, setActiveFormat] = useState(0)

	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<div className="mt-2"></div>
			{activeFormat === 0 && (
				<div>
					<TextComponent fontSize={14} fontWeight={700} color={"#696969"}>
						Формат футбольного турнира
					</TextComponent>
					<div style={{ marginBottom: 17 }}></div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<div
							style={{
								background: "#9F6BC9",
								borderRadius: "100%",
								paddingRight: 8,
								paddingLeft: 8,
								color: "#fff",
							}}
						>
							<span>1</span>
						</div>
						<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
							Количество участников
						</TextComponent>
					</div>
					<TextComponent fontSize={16} fontWeight={400} color={"#263238"}>
						16 команд по 6 человек (+6 замен), количество болельщиков
						неограниченно
					</TextComponent>
					<div style={{ marginBottom: 5 }}></div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<div
							style={{
								background: "#9F6BC9",
								borderRadius: "100%",
								paddingRight: 8,
								paddingLeft: 8,
								color: "#fff",
							}}
						>
							<span>2</span>
						</div>
						<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
							Турнирная сетка
						</TextComponent>
					</div>
					<TextComponent fontSize={16} fontWeight={400} color={"#263238"}>
						сформирована так, что каждая команда сыграет 3 матча в группе и
						минимум 1 матч плей-офф
					</TextComponent>
					<div style={{ marginBottom: 5 }}></div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<div
							style={{
								background: "#9F6BC9",
								borderRadius: "100%",
								paddingRight: 8,
								paddingLeft: 8,
								color: "#fff",
							}}
						>
							<span>3</span>
						</div>
						<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
							Время проведения
						</TextComponent>
					</div>
					<TextComponent fontSize={16} fontWeight={400} color={"#263238"}>
						23 сентября с 10:00 до 16:00 Москва, Сокольники
					</TextComponent>
					<div style={{ marginBottom: 5 }}></div>
				</div>
			)}
			{activeFormat === 1 && (
				<div>
					<div style={{ marginBottom: 17 }}></div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<div
							style={{
								background: "#9F6BC9",
								borderRadius: "100%",
								paddingRight: 8,
								paddingLeft: 8,
								color: "#fff",
							}}
						>
							<span>1</span>
						</div>
						<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
							Команды участвуют в групповом этапе
						</TextComponent>
					</div>
					<div style={{ marginBottom: 36 }}></div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<div
							style={{
								background: "#9F6BC9",
								borderRadius: "100%",
								paddingRight: 8,
								paddingLeft: 8,
								color: "#fff",
							}}
						>
							<span>2</span>
						</div>
						<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
							Победители группового этапа выходят в плей-офф и борются за
							призовые места
						</TextComponent>
					</div>
					<div style={{ marginBottom: 36 }}></div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<div
							style={{
								background: "#9F6BC9",
								borderRadius: "100%",
								paddingRight: 8,
								paddingLeft: 8,
								color: "#fff",
							}}
						>
							<span>3</span>
						</div>
						<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
							Победителей наградят кубками и медалями
						</TextComponent>
					</div>
				</div>
			)}
			{activeFormat === 2 && (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<TextComponent fontSize={16} fontWeight={700} color={"#263238"}>
						Победителей наградят кубками и медалями
					</TextComponent>
					<ImageComponent
						width={187}
						height={187}
						src={require("assets/img/vitamin.png")}
						alt="nonebook"
					></ImageComponent>
				</div>
			)}
			<div style={{ display: "flex", alignItems: "center", marginTop: 47 }}>
				<div
					style={{
						width: 50,
						height: 50,
						borderRadius: "100%",
						background: "#F3F3F3",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						cursor: "pointer",
						border: `1px solid ${
							activeFormat === 0 ? "#9F6BC9" : "transparent"
						}`,
					}}
					onClick={() => setActiveFormat(0)}
				>
					<ImageComponent
						width={25}
						height={25}
						src={require("assets/img/nonebook.svg")}
						alt="nonebook"
					></ImageComponent>
				</div>
				<div
					style={{
						border: "1px solid rgba(159, 107, 201, 0.30)",
						width: 50,
						height: 1,
						marginLeft: 25,
						marginRight: 25,
					}}
				></div>
				<div
					style={{
						width: 50,
						height: 50,
						borderRadius: "100%",
						background: "#F3F3F3",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						border: `1px solid ${
							activeFormat === 1 ? "#9F6BC9" : "transparent"
						}`,
					}}
					onClick={() => setActiveFormat(1)}
				>
					<ImageComponent
						width={25}
						height={25}
						src={require("assets/img/stock.svg")}
						alt="nonebook"
					></ImageComponent>
				</div>
				<div
					style={{
						border: "1px solid rgba(159, 107, 201, 0.30)",
						width: 50,
						height: 1,
						marginLeft: 25,
						marginRight: 25,
					}}
				></div>
				<div
					style={{
						width: 50,
						height: 50,
						borderRadius: "100%",
						background: "#F3F3F3",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						border: `1px solid ${
							activeFormat === 2 ? "#9F6BC9" : "transparent"
						}`,
					}}
					onClick={() => setActiveFormat(2)}
				>
					<ImageComponent
						width={25}
						height={25}
						src={require("assets/img/cup.svg")}
						alt="nonebook"
					></ImageComponent>
				</div>
			</div>
		</BaseLayout>
	)
}

export default Formats
