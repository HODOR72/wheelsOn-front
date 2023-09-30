import type { NextPage } from "next";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { ButtonComponent } from "../components/button-component";
import Image from "next/image";
import { InputComponent } from "../components/input-component";
import { TextComponent } from "../components/text-component";

const Sell: NextPage = () => {

	return (
		<>
			<BaseLayout>
				<div className="burger-list">
					<TopHeader type="burger"></TopHeader>

					<TextComponent color="#fff" fontWeight={500} fontSize={22} textAlign="center">Оставить заявку и получить презентацию</TextComponent>
					<div className="contact-row">
						<TextComponent color="#fff" fontWeight={500} fontSize={14}>Имя</TextComponent>
						<input className="contact-input" type="text" placeholder="Введите ваше имя" />
					</div>
					<div className="contact-row">
						<TextComponent color="#fff" fontWeight={500} fontSize={14}>Контакты</TextComponent>
						<input className="contact-input" type="text" placeholder="Введите номер телефона" />
					</div>
				</div>
			</BaseLayout>
			<div className="curve">
				<Image alt="curve" src={require("/assets/img/Bezier.svg")} width={1500} height={300} />
				<div style={{ margin: "auto", marginTop: "20px" }} className="mobile-cells-wrapper pt-5">
					<ButtonComponent>Оставить заявку</ButtonComponent>
				</div>
			</div>
		</>
	);
};

export default Sell;
