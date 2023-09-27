import React, { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ImageComponent } from "../components/image-component";
import "swiper/css";
import "swiper/css/navigation";
import { IconButton } from "@mui/material";
import { TextComponent } from "../components/text-component";

interface Slide {
  title: string;
  img: any;
  par1: string;
  par2?: string;
  par3?: string;
}

interface ThreeFactsSlider {
  slides: Slide[];
}

export const ThreeFactsSlider: FunctionComponent<ThreeFactsSlider> = ({
  slides,
}) => {
  return (
    <React.Fragment>
      <div
        style={{ marginTop: "-50px" }}
        className="d-flex justify-content-end mb-3"
      >
        <IconButton sx={{ paddingLeft: 0, padding: 0 }} className="prev-button">
          <ImageComponent
            width={40}
            height={40}
            src={require("assets/img/arrow-prev.png")}
            alt={"back"}
            borderRadius={14}
          ></ImageComponent>
        </IconButton>

        <IconButton sx={{ padding: 0, marginLeft: 1 }} className="next-button">
          <ImageComponent
            width={40}
            height={40}
            src={require("assets/img/arrow-next.png")}
            alt={"next"}
            borderRadius={14}
          ></ImageComponent>
        </IconButton>
      </div>
      <Swiper
        slidesPerView={1}
        navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
        modules={[Navigation]}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex justify-content-center">
              <ImageComponent
                src={slide.img}
                width={320}
                showLoading
                borderRadius={16}
                height={186}
                alt="pic"
              ></ImageComponent>
            </div>
            <div className="mt-3"></div>
            <TextComponent fontSize={22} fontWeight={500}>
              А вы знали, что...
            </TextComponent>
            <div className="mt-3"></div>
            <TextComponent>{slide.par1}</TextComponent>
            <div className="mt-2"></div>
            <TextComponent>{slide.par2}</TextComponent>
            <div className="mt-2"></div>
            <TextComponent>{slide.par3}</TextComponent>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-3"></div>
    </React.Fragment>
  );
};
