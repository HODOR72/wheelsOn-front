/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";

export const ScrollDownIconWidget: FunctionComponent = () => {
	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				top: 0,
				left: 0,
				zIndex: -1,
			}}
			className='d-flex justify-content-center pt-1'
		>
			{/* Компонент next/img не отображает корректно webp файл в */}
			{/* production моде. В данном файле был выключен eslint и  */}
			{/* использован дефолтный тэг img */}
			<img
				src={require("assets/img/srcoll-down-gif.webp").default.src}
				width={40}
				height={40}
				alt='scroll-down'
			/>
		</div>
	);
};
