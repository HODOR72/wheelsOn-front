import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"
import Image from "next/image"

const MapPage: NextPage = () => {
	const defaultState = {
		center: [55.799305, 37.687919],
		zoom: 13,
	}

	const markers = [{ geometry: [55.799305, 37.687919] }]

	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<TextComponent fontSize={22} fontWeight={500}>
				Расположение стадиона
			</TextComponent>
			<div className="mt-2"></div>
			<YMaps>
				<Map defaultState={defaultState} width="100%" height={500}>
					{markers.map((marker, index) => (
						<Placemark key={index} geometry={marker.geometry} />
					))}
				</Map>
			</YMaps>
			<div style={{ marginTop: 30 }}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<div style={{ marginRight: 10 }}>
						<Image
							priority
							width={30}
							height={30}
							alt={"geo"}
							src={require("assets/img/geo.svg")}
						></Image>
					</div>
					<TextComponent fontSize={18} fontWeight={500}>
						ул. Короленко 1А, Футбольный центр CityFootball
					</TextComponent>
				</div>
				<div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
					<div style={{ marginRight: 10 }}>
						<Image
							priority
							width={30}
							height={30}
							alt={"geo"}
							src={require("assets/img/auto.svg")}
						></Image>
					</div>
					<TextComponent fontSize={18} fontWeight={500}>
						На машине 4 минуты от метро Сокольники
					</TextComponent>
				</div>
				<div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
					<div style={{ marginRight: 10 }}>
						<Image
							priority
							width={30}
							height={30}
							alt={"geo"}
							src={require("assets/img/metro.svg")}
						></Image>
					</div>
					<TextComponent fontSize={18} fontWeight={500}>
						В 12 минутах ходьбы от метро
					</TextComponent>
				</div>
			</div>
		</BaseLayout>
	)
}
export default MapPage
