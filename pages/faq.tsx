import React from "react"
import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { BaseLayout } from "../widgets/base-layout"
import { TopHeader } from "../widgets/top-header"
import { AccordionComponent } from "../components/accordion-component"

interface faqContent {
	title: string
	content: string
}

const faqContent: faqContent[] = [
	{
		title: 'На что идут деньги инвестора "при приобретении акций"?',
		content:
			"Денежные средства являются целевыми - 100% инвестиций направляются на финансирование автопарка",
	},
	{
		title: "Как часто выплачиваются проценты?",
		content:
			"В случае владения привилегированными акциями компании проценты выплачиваются ежегодно (в размере от 12% до 25% от суммы инвестиций), в случае с продажей авто в рассрочку выплаты будут ежеквартальными",
	},
	{
		title: "Какие требования к инвестору?",
		content:
			"Все инвесторы проходят базовую процедуру KYC во избежание санкционных и др. рисков",
	},
	{
		title: "Как можно быстро получить ВНЖ в ОАЭ, что для этого требуется?",
		content:
			"ВНЖ и банковский счет в ОАЭ можно получить за 1-2 недели, необходимо присутствие в стране в этот период. Мы можем помочь с организацией и взять на себя все расходы при инвестиции от USD 200 тыс.",
	},
]

const Faq: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader type="classic-no-logo"></TopHeader>

			<TextComponent fontSize={22} fontWeight={500} color="#fff">
				Частые вопросы
			</TextComponent>

			<div className="mt-3"></div>

			<div>
				{faqContent.map((faq, index) => (
					<React.Fragment key={index}>
						<AccordionComponent
							top={faq.title}
							bottom={faq.content}
						></AccordionComponent>
						<div className="mt-3"></div>
					</React.Fragment>
				))}
			</div>
		</BaseLayout>
	)
}

export default Faq
