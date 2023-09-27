import React, { FunctionComponent, useRef } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";

interface vehicleMark {
	id: string;
	value: string;
}

interface InputAutocompleteComponent {
	disabled?: boolean;
	options: string[];
	placeholder: string;
	inputValue: string;
	onChange?(value: string): any;
	onInputChange?(value: string): any;
}

export const InputAutocompleteComponent: FunctionComponent<
	InputAutocompleteComponent
> = ({
	disabled = false,
	options,
	placeholder,
	inputValue,
	onInputChange = () => {},
}) => {
	const inputComponentRef = useRef(null);

	const blurinput = () => {
		if (!inputComponentRef || !inputComponentRef.current) return;
		// @ts-ignore
		inputComponentRef.current.blur();
	};

	const onKeyDownHandler = (event: any) => {
		const isEnterPress = event.keyCode === 13;
		if (isEnterPress) blurinput();
	};

	return (
		<div
			style={{
				position: "relative",
				padding: 2,
				height: 42,
				borderRadius: "4px",
				marginTop: 8,
				boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.17)",
				border: "0.5px solid #F1F1F1",
				background:
					"linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(159,159,159,1) 100%)",
			}}
		>
			<Autocomplete
				disablePortal
				disabled={disabled}
				sx={{
					height: 37,
					borderRadius: "4px",
					border: "0 solid #F1F1F1",
					boxShadow: "inset -1px 2px 4px rgba(0, 0, 0, 0.17)",
					background: "#F1F1F1",
				}}
				id='combo-box-demo'
				options={options}
				blurOnSelect
				popupIcon={""}
				clearIcon={<ClearIcon sx={{ color: "#cb243c" }} fontSize='small' />}
				classes={{
					inputRoot: "form-input",
				}}
				value={inputValue}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					onInputChange(newInputValue);
				}}
				noOptionsText={""}
				renderInput={(params) => (
					<TextField
						inputRef={inputComponentRef}
						placeholder={placeholder}
						sx={{ height: 37 }}
						{...params}
						variant='standard'
						label=''
						onKeyDown={onKeyDownHandler}
					/>
				)}
			></Autocomplete>
		</div>
	);
};
