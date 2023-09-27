import React from "react";
import type { NextPage } from "next";
import { useState } from "react";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { TextComponent } from "../components/text-component";
import { GetBonusTicket } from "../widgets/get-bonus-ticket";
import { DoubleBorderWidget } from "../widgets/double-border-widget";
import { ButtonComponent } from "../components/button-component";
import { PhoneNumberMaskInput } from "../widgets/phone-number-mask-input";

const GetBonus: NextPage = () => {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [unformattedPhoneNumber, setUnformattedPhoneNumber] = useState("");

  return (
    <BaseLayout>
      <TopHeader type="homelink"></TopHeader>
      <TextComponent fontSize={22} fontWeight={500} textAlign="center">
        Получить бонус
      </TextComponent>
      <div className="mt-2"></div>
      <TextComponent fontSize={15} color={"#696969"} textAlign="center">
        Введите ваш номер телефона и мы начислим бонус:
      </TextComponent>

      <div className="mt-3"></div>
      <div className="d-flex justify-content-center">
        {" "}
        <GetBonusTicket
          topLabel="Результат:"
          bottomLabel="500AC"
        ></GetBonusTicket>
      </div>

      <div className="mt-3 pt-3"></div>

      <TextComponent fontSize={13} fontWeight={400} color={"#696969"}>
        Введите ваш мобильный номер телефона
      </TextComponent>

      <PhoneNumberMaskInput
        setFormattedValue={setFormattedPhoneNumber}
        setUnformattedValue={setUnformattedPhoneNumber}
      ></PhoneNumberMaskInput>

      <div className="mt-5"></div>
      <DoubleBorderWidget>
        <ButtonComponent>Получить бонус</ButtonComponent>
      </DoubleBorderWidget>

      <div className="mt-3"></div>
      <TextComponent
        fontSize={12}
        fontWeight={400}
        color={"#696969"}
        textAlign="center"
        textTransform="initial"
      >
        Нажимая кнопку “получить бонус” вы подтверждаете, что вам более 18 лет и
        соглашаетесь с{" "}
        <a style={{ color: "#696969" }} href="">
          условиями соглашения
        </a>
      </TextComponent>
    </BaseLayout>
  );
};

export default GetBonus;
