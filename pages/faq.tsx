import React from "react"
import type { NextPage } from "next"
import { ImageComponent } from "../components/image-component"
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
		title: "Акционером какой компании становится инвестор?",
		content:
			"Инвестор приобретает акции холдинговой компании в ОАЭ, которая владеет операционной компанией с лицензией rent a car в Дубае",
	},
	{
		title: "На что идут деньги инвестора?",
		content: "",
	},
	{
		title: "Как часто выплачиваются проценты?",
		content: "",
	},
	{
		title: "Какие требования к инвестору?",
		content: "",
	}, {
		title: "Как можно быстро получить ВНЖ в ОАЭ, что для этого требуется?",
		content: "",
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
