import type { NextPage } from "next"
import { TextComponent } from "../components/text-component"
import { AboutRedPlatform } from "../widgets/about-red-platform"
import { BaseLayout } from "../widgets/base-layout"
import { DoubleBorderWidget } from "../widgets/double-border-widget"
import { ScrollDownIconWidget } from "../widgets/scroll-down-icon-widget"
import { TopHeader } from "../widgets/top-header"

const About: NextPage = () => {
	return (
		<BaseLayout>
			<TopHeader type="classic"></TopHeader>
			<TextComponent fontSize={22} fontWeight={500}>
				О компании
			</TextComponent>
			<div className="mt-3"></div>
			<TextComponent fontSize={16} color={"#696969"}>
				Vitamin.tools — бесплатная экосистема для управления рекламой. Мы
				объединяем бизнес в Digital-среде, чтобы вместе найти решения, которые
				приводят к успеху.
			</TextComponent>
			<div className="mt-2"></div>
			<ul style={{ paddingLeft: 15 }}>
				<li>
					<TextComponent fontSize={16} color={"#696969"}>
						7407 - клиентов работает с рекламой
					</TextComponent>
				</li>
				<li>
					<TextComponent fontSize={16} color={"#696969"}>
						57352 - рекламных кабинетов создано
					</TextComponent>
				</li>
				<li>
					<TextComponent fontSize={16} color={"#696969"}>
						6,4 млрд ₽ - рекламного бюджета инвестировано
					</TextComponent>
				</li>
			</ul>
		</BaseLayout>
	)
}

export default About
