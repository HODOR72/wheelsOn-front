import type { NextPage } from "next";
import { BaseLayout } from "../widgets/base-layout";
import { TopHeader } from "../widgets/top-header";
import { TextComponent } from "../components/text-component";
import { ImageComponent } from "../components/image-component";
import { ButtonComponent } from "../components/button-component";
const DownloadStickers: NextPage = () => {
  const download = () => {
    window.open("https://t.me/addstickers/Robodog_in_action");
  };

  return (
    <BaseLayout>
      <TopHeader></TopHeader>
      <TextComponent
        fontWeight={500}
        fontSize={26}
        textTransform={"initial"}
        margin={"0 0 1em 0"}
      >
        Забери свой стикерпак
      </TextComponent>

      <div
        style={{
          boxShadow: "0px 5px 24px rgba(48, 40, 98, 0.06)",
          borderRadius: " 10px",
          padding: "20px",
        }}
      >
        <div className="d-flex justify-content-center">
          <TextComponent color="#E61926" fontWeight={500}>
            Vol.1
          </TextComponent>
        </div>

        <div className="mt-3"></div>
        <div className="d-flex justify-content-center">
          <ImageComponent
            src={require("assets/img/stickerpack.png")}
            width={305}
            showLoading
            height={190}
            alt={"stickers"}
          ></ImageComponent>
        </div>
        <div className="mt-3"></div>
        <ButtonComponent onClick={download}>Добавить</ButtonComponent>
      </div>
    </BaseLayout>
  );
};

export default DownloadStickers;
