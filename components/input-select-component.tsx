import React, { FunctionComponent } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface vehicleMark {
	id: string;
	value: string;
}

interface InputSelectComponent {
	disabled?: boolean;
	options: string[];
	placeholder: string;
	inputValue: string;
	onChange(value: string): any;
}

export const InputSelectComponent: FunctionComponent<InputSelectComponent> = ({
	disabled = false,
	options,
	placeholder,
	inputValue,
	onChange,
}) => {
	const handleChange = (event: any) => {
		const {
			target: { value },
		} = event;
		onChange(value);
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
			<Select
				fullWidth
				value={inputValue}
				displayEmpty
				disabled={disabled}
				onChange={handleChange}
				inputProps={{ "aria-label": "Without label" }}
				renderValue={(selected) => {
					if (selected.length === 0) {
						return <>{placeholder}</>;
					}

					return selected;
				}}
				style={{
					height: 37,
					borderRadius: "4px",
					border: "0 solid #F1F1F1",
					boxShadow: "inset -1px 2px 4px rgba(0, 0, 0, 0.17)",
					background: "#F1F1F1",
				}}
				input={<OutlinedInput label='Name' />}
			>
				{options.map((name) => (
					<MenuItem key={name} value={name}>
						{name}
					</MenuItem>
				))}
			</Select>
		</div>
	);
};
