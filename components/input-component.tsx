import React, { FunctionComponent, useRef } from "react"
import { Input } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

interface InputComponent {
	placeholder: string
	value: string | number
	setValue(event: any): any
	removeValue?(): any
	needRemode?: boolean
	type?: string
	onFocus?(): any
	onBlur?(): any
	height?: number
	style?: string
	label?: string
	required?: boolean
}

export const InputComponent: FunctionComponent<InputComponent> = ({
	placeholder,
	value,
	setValue,
	removeValue = () => {},
	needRemode = false,
	type = "text",
	onFocus = () => {},
	onBlur = () => {},
	height = 42,
	label = "123",
	required = true,
}) => {
	const inputComponentRef = useRef(null)

	const blurinput = () => {
		if (!inputComponentRef || !inputComponentRef.current) return
		// @ts-ignore
		inputComponentRef.current.blur()
	}

	const onKeyDownHandler = (event: any) => {
		const isEnterPress = event.keyCode === 13
		if (isEnterPress) blurinput()
	}

	return (
		<>
			{placeholder && (
				<p style={{ marginBottom: 4, marginTop: 8 }}>
					{placeholder} {required && <span style={{ color: "red" }}>*</span>}
				</p>
			)}
			<div
				style={{
					position: "relative",
					padding: 2,
					height: height,
					borderRadius: "4px",
					boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.17)",
					border: "0.5px solid #F1F1F1",
					background:
						"linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(159,159,159,1) 100%)",
					width: "100%",
				}}
			>
				<Input
					inputRef={inputComponentRef}
					fullWidth
					color="info"
					disableUnderline
					type={type}
					sx={{
						borderRadius: "4px",
						paddingLeft: "0.5em",
						height: height - 5,
						boxShadow: "inset -1px 2px 4px rgba(0, 0, 0, 0.17)",
						background: "#F1F1F1",
					}}
					placeholder={placeholder}
					value={value}
					onChange={event => setValue(event.target.value)}
					onKeyDown={onKeyDownHandler}
					onFocus={onFocus}
					onBlur={onBlur}
				></Input>
				{value && needRemode ? (
					<CloseIcon
						sx={{
							position: "absolute",
							color: "#D2343E",
							right: 8,
							width: 24,
							height: 24,
							top: 8,
						}}
						onClick={removeValue}
					></CloseIcon>
				) : (
					""
				)}
			</div>
		</>
	)
}
