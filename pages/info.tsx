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
			<TextComponent color="#fff" fontSize={24} fontWeight={700} textAlign="center">
				Стать акционером
			</TextComponent>
			<div className="list">
				<ul className="become-list">
					<li className="become-item">
						<b>Структура входа</b>: привилегированные акции компании ОАЭ с фиксированной доходностью
					</li>
					<li className="become-item">
						<b>Минимальная сумма инвестиций</b>:  USD 100k (ВНЖ ОАЭ в подарок при инвестиции от USD 200k)
					</li>
					<li className="become-item">
						<b>Доходность</b>: от 12% (фикс) до 25% в год
					</li>
					<li className="become-item">
						<b>Частота выплат %</b>: 2 раза в год
					</li>
					<li className="become-item">
						<b>Срок инвестиции</b>: от 3-х лет
					</li>
					<li className="become-item">
						<b>Использование средств</b>: 100% целевые средства на закупку авто
					</li>
					<li className="become-item">
						<b>Марки приобретаемых авто</b>: премиум / SUV автомобили (Land Rover, Mercedes, BMW, Porsche, Audi и др.)
					</li>
					<li className="become-item">
						<b>Возможные формы платежа</b>: банковский перевод, криптовалюта, cash
					</li>
					<li className="become-item">
						<b>Отчетность</b>: акционер будет ежеквартально получать отчетность о результатах деятельности компании
					</li>
				</ul>
			</div>
			<div style={{ margin: "auto", width: "100%" }} className="mobile-cells-wrapper pt-3 pb-5">
				<ButtonComponent href="sell">Связаться с нами</ButtonComponent>
			</div>
		</BaseLayout>
	)
}

export default InfoPage
