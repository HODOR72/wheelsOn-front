import { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"

const InfoPage: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<TextComponent fontSize={22} fontWeight={700} textAlign="center">
				VITAMIN.TOOLS FOOTBAL DAY ПО ЧАСАМ
			</TextComponent>
			<div className="mt-5"></div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				onSlideChange={() => console.log("slide change")}
				onSwiper={swiper => console.log(swiper)}
			>
				<SwiperSlide>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							gap: "10px",
							textAlign: "center",
						}}
					>
						<p style={{ color: "#9F6BC9", fontSize: "35px", marginBottom: 15 }}>
							09:00 — 10:00
						</p>
						<p style={{ fontSize: 14 }}>
							Сбор команд и болельщиков на стадионе CityFootball «Сокольники»
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<p style={{ color: "#9F6BC9", fontSize: "35px", marginBottom: 15 }}>
							10:00 — 10:30
						</p>
						<p style={{ fontSize: 14 }}>
							Официальное открытие и объявление спонсоров ведущим
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							gap: "10px",
							textAlign: "center",
						}}
					>
						<p style={{ color: "#9F6BC9", fontSize: "35px", marginBottom: 15 }}>
							10:30 — 12:00
						</p>
						<p style={{ fontSize: 14 }}>Старт группового этапа</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							gap: "10px",
							textAlign: "center",
						}}
					>
						<p style={{ color: "#9F6BC9", fontSize: "35px", marginBottom: 15 }}>
							12:00 — 15:00
						</p>
						<p style={{ fontSize: 14 }}>Полуфинал плей-офф</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							gap: "10px",
							textAlign: "center",
						}}
					>
						<p style={{ color: "#9F6BC9", fontSize: "35px", marginBottom: 15 }}>
							15:00 — 16:00
						</p>
						<p style={{ fontSize: 14 }}>Финал плей-офф</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							gap: "10px",
							textAlign: "center",
						}}
					>
						<p style={{ color: "#9F6BC9", fontSize: "35px", marginBottom: 15 }}>
							17:00 — 00:00
						</p>
						<p style={{ fontSize: 14 }}>
							Закрытое afterpatry с брендированной фотозоной, фуршетом и
							интерактивами
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</BaseLayout>
	)
}

export default InfoPage
