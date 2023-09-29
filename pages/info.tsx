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
			<TopHeader type="numbers"></TopHeader>
			<TextComponent color="#fff" fontSize={22} fontWeight={700} textAlign="center">
				Стать акционером
			</TextComponent>
			<div className="mt-5 list">
				<ul>
					<li>
						<b>Структура входа</b>: привилегированные акции компании ОАЭ с фиксированной доходностью
					</li>
					<li>
						<b>Минимальная сумма инвестиций</b>:  USD 100k (ВНЖ ОАЭ в подарок при инвестиции от USD 200k)
					</li>
					<li>
						<b>Доходность</b>: от 12% (фикс) до 25% в год
					</li>
					<li>
						<b>Частота выплат %</b>: 2 раза в год
					</li>
					<li>
						<b>Срок инвестиции</b>: от 3-х лет
					</li>
					<li>
						<b>Использование средств</b>: 100% целевые средства на закупку авто
					</li>
					<li>
						<b>Марки приобретаемых авто</b>: премиум / SUV автомобили (Land Rover, Mercedes, BMW, Porsche, Audi и др.)
					</li>
					<li>
						<b>Возможные формы платежа</b>: банковский перевод, криптовалюта, cash
					</li>
					<li>
						<b>Отчетность</b>: акционер будет ежеквартально получать отчетность о результатах деятельности компании
					</li>
				</ul>
			</div>
			<div style={{ margin: "auto", marginTop: "20px", marginBottom: "20px" }} className="mobile-cells-wrapper pt-5">
				<ButtonComponent href="sell">Оставить заявку</ButtonComponent>
			</div>
		</BaseLayout>
	)
}

export default InfoPage
