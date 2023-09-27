import { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import Image from "next/image"
Image
const InfoPage: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<TextComponent fontSize={20} fontWeight={700} textAlign="center">
				СТАНЬТЕ ГЕНЕРАЛЬНЫМ ПАРТНЕРОМ ТУРНИРА
			</TextComponent>
			<div className="mt-2"></div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div>
					<p
						style={{
							color: "#9f6bc9",
							fontSize: "22px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						До турнира
					</p>
					<p
						style={{
							fontSize: "18",
						}}
					>
						- Ваш логотип на сайте мероприятия с указанием статуса;
						<br /> - Размещение логотипа в email-рассылке по базе клиентов из{" "}
						<b>200 000+</b> контактов;
						<br /> - Промопосты в социальных сетях 16 компаний-участников
						турнира (VK, Telegram);
					</p>
				</div>
				<div>
					<p
						style={{
							color: "#9f6bc9",
							fontSize: "22px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						Afterparty
					</p>
					<p
						style={{
							fontSize: "18",
						}}
					>
						- Брендированная фотозона
						<br /> - Брендированные листовки на барной стойке;
						<br /> - Упоминание генерального партнера ведущим во время
						торжественной части (4 раза);
						<br /> - Возможность проведения промо-акций на территории
						мероприятия (обсуждается отдельно);
					</p>
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div>
					<p
						style={{
							color: "#9f6bc9",
							fontSize: "22px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						Во время турнира
					</p>
					<p
						style={{
							fontSize: "18",
						}}
					>
						- Упоминание генерального партнера ведущим во время официальной
						части (4 раза);
						<br /> - Ваш логотип на футбольном поле, флагах с флагштоками,
						призах и в YouTube-трансляции;
						<br /> - Возможность презентации продукта бренда со сцены (прямые
						продажи);
						<br /> - Возможность вручения подарков победителям турнира
						(обсуждается отдельно);
					</p>
				</div>
				<div>
					<p
						style={{
							color: "#9f6bc9",
							fontSize: "22px",
							fontWeight: 500,
							marginBottom: "10",
						}}
					>
						После турнира
					</p>
					<p
						style={{
							fontSize: "18",
						}}
					>
						- Ваш логотип во влоге по итогам турнира с медийным ведущим
						(YouTube);
						<br /> - Ваш логотип в пост-рассылке с записью футбольных матчей по
						базе клиентов из 200 000+ контактов;
						<br /> - Фотоотчет с мероприятия с интеграцией бренда.
					</p>
				</div>
			</div>
			<div style={{ display: "flex", gap: 10 }}>
				<p
					style={{
						color: "#9f6bc9",
						fontSize: "20px",
						fontWeight: 500,
					}}
				>
					Стоимость:
					<br /> 450 000 руб.
				</p>
				<Image
					priority
					width={110}
					height={51}
					alt={"arrow"}
					src={require("assets/img/arrow.svg")}
					style={{transform: 'translateY(-20px) rotate(-10deg)'}}
				></Image>
				<p
					style={{
						fontSize: "18px",
						fontWeight: 500,
						marginBottom: "20px",
						color: "#9f6bc9",
					}}
				>
					Только <br /> 2 партнера
				</p>
			</div>
		</BaseLayout>
	)
}

export default InfoPage
