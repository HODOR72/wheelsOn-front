// @ts-nocheck
import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { ButtonComponent } from "../components/button-component"

const Formats: NextPage = () => {

	return (
		<BaseLayout>
			<TopHeader type="advanced"></TopHeader>
			<div className="mt-2"></div>
			<TextComponent color="#fff" fontSize={22} fontWeight={700} textAlign="center">
				Продать авто
			</TextComponent>
			<div className="list">
				<ul className="become-list">
					<li className="become-item">
						<b>Структура входа</b>: покупка собственного автомобиля и продажа нашей компании в рассрочку
					</li>
					<li className="become-item">
						<b>Минимальная сумма инвестиций</b>: USD 200k (для оформления автомобиля в собственность необходимо иметь ВНЖ в ОАЭ)
					</li>
					<li className="become-item">
						<b>Доходность</b>: от 12% в год с погашением тела долга через 3-5 лет на выбор инвестора
					</li>
					<li className="become-item">
						<b>Частота выплат %</b>: ежеквартально
					</li>
					<li className="become-item">
						<b>Срок инвестиции</b>: от 3-х лет
					</li>
					<li className="become-item">
						<b>Марки приобретаемых авто</b>: премиум / SUV автомобили (Land Rover, Mercedes, BMW, Porsche, Audi и др.)
					</li>
					<li className="become-item">
						<b>Возможные формы платежа</b>: банковский перевод, криптовалюта, cash
					</li>
					<li className="become-item">
						<b>Гарантии выплат</b>: security check на сумму долга от имени компании
					</li>
				</ul>
			</div>
			<div style={{ margin: "auto" }} className="mobile-cells-wrapper pt-3 pb-5">
				<ButtonComponent href="sell">Связаться с нами</ButtonComponent>
			</div>
		</BaseLayout>
	)
}

export default Formats
