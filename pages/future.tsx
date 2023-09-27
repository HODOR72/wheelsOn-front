import type { NextPage } from "next";
import { ButtonComponent } from "../components/button-component";
import { TextComponent } from "../components/text-component";
import { BaseLayout } from "../widgets/base-layout";
import { DoubleBorderWidget } from "../widgets/double-border-widget";
import { TopHeader } from "../widgets/top-header";

const FutureAuto: NextPage = () => {
  return (
		<BaseLayout>
			<TopHeader></TopHeader>
			<TextComponent fontSize={22} fontWeight={500}>
				Заявка на участие в турнире
			</TextComponent>
			<div className="mt-3"></div>
			{/* <div className="d-flex justify-content-center">
				<ImageComponent
					src={require("assets/img/victorina.jpg")}
					width={320}
					height={186}
					alt="pic"
					borderRadius={16}
					showLoading
				></ImageComponent>
			</div> */}
			<div className="mt-3"></div>
			<TextComponent fontSize={16} color={"#696969"}>
				Расскажи о своей команде!
			</TextComponent>
			<div className="mt-5"></div>
			<DoubleBorderWidget>
				<ButtonComponent href={"test1"}>Ответить на вопросы!</ButtonComponent>
			</DoubleBorderWidget>
		</BaseLayout>
	)
};

export default FutureAuto;
