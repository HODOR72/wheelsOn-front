import { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { ButtonComponent } from "../components/button-component"
import "swiper/css"
import "swiper/css/navigation"

const InfoPage: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader type="advanced"></TopHeader>
			<TextComponent
				color="#fff"
				fontSize={24}
				fontWeight={700}
				textAlign="center"
			>
				Стать владельцем привилегированных акций с доходностью до 25% годовых
			</TextComponent>
			<div className="list">
				<ul className="become-list">
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Минимальная сумма инвестиций</b>:
						$100k тыс.
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}> ВНЖ ОАЭ в подарок </b>:при
						инвестиции от $100 тыс.
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Доходность</b>: от 12% до 25% в год в валюте
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Частота выплат %</b>: 2 раза в год
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Срок инвестиции</b>: от 3-х лет
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Использование средств</b>: 100%
						целевые средства на закупку авто
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Приобретаемые авто</b>: автомобили
						бизнес и премиум класса
					</li>
					<li className="become-item">
						<b style={{ color: "#7df17b" }}>Возможные формы платежа</b>:
						банковский перевод, криптовалюта, cash
					</li>
				</ul>
				<p style={{ marginTop: 10, color: "#7df17b" , textAlign: 'center'}}>
					Делаем внж при инвестиции от $200 тыс.
				</p>
			</div>
			<div
				style={{ margin: "auto", width: "100%" }}
				className="mobile-cells-wrapper pt-3 pb-5"
			>
				<ButtonComponent href="sell">Связаться с нами</ButtonComponent>
			</div>
		</BaseLayout>
	)
}

export default InfoPage
