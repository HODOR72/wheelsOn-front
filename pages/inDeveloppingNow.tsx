import type { NextPage } from "next";
import React from "react";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { TextComponent } from "../components/text-component";
import { ButtonComponent } from "../components/button-component";
import { DoubleBorderWidget } from "../widgets/double-border-widget";

const inDeveloppingNow: NextPage = () => {
  return (
    <BaseLayout>
      <TopHeader type="classic"></TopHeader>
      <div className="d-flex justify-content-center">
        <TextComponent
          fontWeight={500}
          fontSize={18}
          width={200}
          textAlign="center"
        >
          Продукт <br /> на данный момент в разработке
        </TextComponent>
      </div>
      <div className="mt-3"></div>
      <div className="d-flex justify-content-center">
        <div
          style={{
            background: "rgba(217, 217, 217, 0.36)",
            borderRadius: "16px",
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
      <div className="mt-3"></div>
      <div className="d-flex justify-content-center">
        <TextComponent
          fontWeight={400}
          fontSize={16}
          textAlign="center"
          color="#696969"
        >
          Уже сейчас вы можете оформить его на нашем сайте alfastrah.ru, а когда
          он станет доступен тут мы вас обязательно уведомим.
        </TextComponent>
      </div>
      <div className="mt-3"></div>
      <DoubleBorderWidget>
        <ButtonComponent>Перейти на сайт</ButtonComponent>
      </DoubleBorderWidget>
    </BaseLayout>
  );
};

export default inDeveloppingNow;
