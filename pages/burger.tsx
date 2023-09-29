import type { NextPage } from "next";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { ListMenuItem } from "../widgets/list-menu-item";
import List from "@mui/material/List";
import Image from "next/image";

import SupportIcon from "../assets/img/supportIcon.svg";
import AboutIcon from "../assets/img/Why.svg";
import FAQIcon from "../assets/img/Questions.svg";

interface menuItem {
	icon: string;
	title: string;
	href: string;
	iconWidth: number;
	iconHeight: number;
}

const menuItems: menuItem[] = [
	{
		icon: AboutIcon.src,
		title: "ОАЭ в цифрах",
		href: "about",
		iconWidth: 25,
		iconHeight: 25,
	},
	{
		icon: FAQIcon.src,
		title: "Частые вопросы",
		href: "faq",
		iconWidth: 35,
		iconHeight: 35,
	},
	{
		icon: SupportIcon.src,
		title: "Связаться с отделом продаж",
		href: "sell",
		iconWidth: 35,
		iconHeight: 35,
	},
]

const Burger: NextPage = () => {
	return (
		<>
			<BaseLayout>
				<div className="burger-list">
					<TopHeader type="burger"></TopHeader>

					<List>
						{menuItems.map((item) => {
							return (
								<ListMenuItem
									key={item.title}
									icon={item.icon}
									href={item.href}
									text={item.title}
									iconWidth={item.iconWidth}
									iconHeight={item.iconHeight}
								></ListMenuItem>
							);
						})}
					</List>
				</div>
			</BaseLayout>
			<div className="curve">
				<Image alt="curve" src={require("/assets/img/Bezier.svg")} width={1500} height={400} />
			</div>
		</>
	);
};

export default Burger;
