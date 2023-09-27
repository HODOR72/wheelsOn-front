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
		title: "Где и когда проходит?",
		content:
			"м. Сокольники, ул. Короленко 1А, Футбольный центр CityFootball\nЕсли вы заблудились, позвоните координатору Илье по телефону: +7 (985) 868-93-93",
	},
	{
		title: "Как мне найти поле N°2?",
		content:
			"Территория «CityFootball» не очень большая. Нужные вам поля находится через 300 метров от входа, если идти по прямой.",
	},
	{
		title: "Какой формат мероприятия?",
		content:
			"VITAMIN.TOOLS FOOTBALL DAY - это одновременно дружеская встреча любителей футбола и настоящая борьба за кубок чемпионов. У нас будет целых шесть часов увлекательного турнира.",
	},
	{
		title: "Кого можно пригласить на мероприятие?",
		content:
			"Каждая команда может привести неограниченное число болельщиков, ведь поддержка - это так важно для боевого духа.\nВход болельщикам свободный, без регистрации и sms.",
	},
	{
		title: "Что мне нужно взять с собой?",
		content:
			"В первую очередь - хорошее настроение и командный дух. А еще вам пригодятся полотенце, бутылочка воды, сменная одежда и что-то перекусить, на случай если еда на турнире вам не подходит.",
	},
	{
		title: "У меня столько вопросов, я не знаю, что мне делать?",
		content:
			"Не знаете, с чего начать, позвоните координатору Илье по телефону: +7 (985) 868-93-93",
	},
]

const Faq: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader type="classic-no-logo"></TopHeader>

			<TextComponent fontSize={22} fontWeight={500}>
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
