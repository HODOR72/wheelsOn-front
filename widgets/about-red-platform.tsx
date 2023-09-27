import React, { FunctionComponent } from "react";
import ScreenImg from "../assets/img/screen.svg";
import { ImageComponent } from "../components/image-component";

export const AboutRedPlatform: FunctionComponent = () => {
  return (
    <div className="about-pic-wrapper">
      <div className="about-platform">
        <h4>Почему «АльфаСтрахование»</h4>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-6 cell">
            <p>
              <span>200+</span>
              страховых продуктов для частных лиц и компаний
            </p>
          </div>
          <div className="col-6 cell">
            <p>
              <span>~ 270</span>
              региональных представительств
            </p>
          </div>
          <div className="col-6 cell">
            <p>
              <span>ruAAA</span>
              Высокий <br /> уровень надежности
            </p>
          </div>

          <div className="col-6 cell">
            <p>
              <span>30</span>
              лет на рынке страховых услуг
            </p>
          </div>

          <div className="col-6 cell">
            <div>
              <div className="d-flex justify-content-center mb-1">
                <ImageComponent
                  width={50}
                  height={32}
                  src={require("assets/img/screen.svg")}
                  alt="screen"
                  margin="auto"
                ></ImageComponent>
              </div>
              <p>
                ОНЛАЙН <br /> оформление полисов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="red-box-shadow-about-pic"></div>
    </div>
  );
};
