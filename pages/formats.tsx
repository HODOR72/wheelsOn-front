// @ts-nocheck
import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { ButtonComponent } from "../components/button-component"

const Formats: NextPage = () => {

	return (
		<BaseLayout>
			<TopHeader type="numbers"></TopHeader>
			<div className="mt-2"></div>
			<TextComponent color="#fff" fontSize={22} fontWeight={700} textAlign="center">
				Продать авто
			</TextComponent>
			<div className="mt-5 list">
				<ul>
					<li>
						<b>Структура входа</b>: покупка собственного автомобиля и продажа нашей компании в рассрочку
					</li>
					<li>
						<b>Минимальная сумма инвестиций</b>: USD 200k (для оформления автомобиля в собственность необходимо иметь ВНЖ в ОАЭ)
					</li>
					<li>
						<b>Доходность</b>: от 12% в год с погашением тела долга через 3-5 лет на выбор инвестора
					</li>
					<li>
						<b>Частота выплат %</b>: ежеквартально
					</li>
					<li>
						<b>Срок инвестиции</b>: от 3-х лет
					</li>
					<li>
						<b>Марки приобретаемых авто</b>: премиум / SUV автомобили (Land Rover, Mercedes, BMW, Porsche, Audi и др.)
					</li>
					<li>
						<b>Возможные формы платежа</b>: банковский перевод, криптовалюта, cash
					</li>
					<li>
						<b>Гарантии выплат</b>: security check на сумму долга от имени компании
					</li>
				</ul>
			</div>
			<div style={{ margin: "auto", marginTop: "20px", marginBottom: "20px" }} className="mobile-cells-wrapper pt-5">
				<ButtonComponent href="sell">Оставить заявку</ButtonComponent>
			</div>
		</BaseLayout>
	)
}

export default Formats
