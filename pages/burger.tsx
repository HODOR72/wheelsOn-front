import type { NextPage } from "next";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { ListMenuItem } from "../widgets/list-menu-item";
import List from "@mui/material/List";

import SupportIcon from "../assets/img/supportIcon.png";
import AboutIcon from "../assets/img/aboutIcon.png";
import FAQIcon from "../assets/img/FAQIcon.png";

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
		title: "Кто организовывает турнир?",
		href: "about",
		iconWidth: 35,
		iconHeight: 35,
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
		title: "Связаться с поддержкой",
		href: "https://t.me/alexander_pimenov",
		iconWidth: 35,
		iconHeight: 35,
	},
	{
		icon: FAQIcon.src,
		title: "Записать команду",
		href: "future",
		iconWidth: 35,
		iconHeight: 35,
	},
]

const Burger: NextPage = () => {
  return (
    <BaseLayout>
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
    </BaseLayout>
  );
};

export default Burger;
