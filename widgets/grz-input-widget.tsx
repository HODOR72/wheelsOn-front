import React, { FunctionComponent, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import MaskedInput from "react-text-mask";

interface grzInputWidget {
	grzValue: string;
	setGrzValue(value: string): any;
}

export const GrzInputWidget: FunctionComponent<grzInputWidget> = ({
	setGrzValue,
}) => {
	const [firstPart, setFirstPart] = useState("");
	const [secondPart, setSecondPart] = useState("");

	const setFirstPartHandler = (event: any) => {
		setFirstPart(event.target.value.toUpperCase());
		setGrzValue(`${event.target.value}${secondPart}`.replaceAll(" ", ""));
	};

	const setSecondPartHandler = (event: any) => {
		setSecondPart(event.target.value.toUpperCase());
		setGrzValue(`${firstPart}${event.target.value}`.replaceAll(" ", ""));
	};

	return (
		<Grid container alignItems={"center"} spacing={1}>
			<Grid item xs={5}>
				<Box
					style={{
						position: "relative",
						height: 42,
						borderRadius: "4px",
						padding: 0,
						border: "2px solid #E1E1E1",
					}}
					className='input-component-wrapper'
				>
					<MaskedInput
						style={{ textAlign: "center", color: "#696969" }}
						guide={false}
						mask={[
							/[А-Яа-я]/,
							" ",
							/\d/,
							/\d/,
							/\d/,
							" ",
							/[А-Яа-я]/,
							/[А-Яа-я]/,
							/[А-Яа-я]/,
						]}
						placeholder='A 111 AA'
						value={firstPart}
						onChange={setFirstPartHandler}
					/>
				</Box>
			</Grid>

			<Grid item xs={3}>
				<Box
					style={{
						position: "relative",
						height: 42,
						borderRadius: "4px",
						padding: 0,
						border: "2px solid #E1E1E1",
					}}
					className='input-component-wrapper'
				>
					<MaskedInput
						style={{ textAlign: "center", color: "#696969" }}
						guide={false}
						mask={[/\d/, /\d/, /\d/]}
						placeholder='111'
						value={secondPart}
						onChange={setSecondPartHandler}
					/>
				</Box>
			</Grid>

			<Grid item xs={3}>
				<Box
					style={{
						position: "relative",
						height: 42,
						borderRadius: "4px",
						padding: 0,
						border: "2px solid #E1E1E1",
					}}
					className='input-component-wrapper'
				>
					{" "}
					<MaskedInput
						style={{ textAlign: "center" }}
						guide={false}
						disabled
						mask={[]}
						placeholder='RUS'
						value={"RUS"}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
