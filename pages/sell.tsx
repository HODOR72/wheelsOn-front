import type { NextPage } from "next";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { ButtonComponent } from "../components/button-component";
import Image from "next/image";
import { InputComponent } from "../components/input-component";

const Sell: NextPage = () => {
	return (
		<>
			<BaseLayout>
				<div className="burger-list">
					<TopHeader type="burger"></TopHeader>

					<InputComponent height={56} name="Имя" placeholder="Введите ваше имя" value={''} setValue={() => null} />
					<InputComponent height={56} name="Контакты" placeholder="Номер телефона" value={''} setValue={() => null} />
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
