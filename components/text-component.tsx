import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';

interface TextComponent {
	children?: any;
	fontWeight?: 400 | 500 | 700;
	color?: string;
	fontSize?: number;
	textAlign?: string;
	width?: string | number;
	margin?: string;
	textTransform?: string;
	lineHeight?: string;
	textDecoration?: string;
}

export const TextComponent: FunctionComponent<TextComponent> = ({
	children = '',
	fontWeight = 400,
	color = '#000000',
	fontSize = 14,
	textAlign = 'left',
	width = 'initial',
	margin = 'initial',
	textTransform = 'initial',
	lineHeight = '1.5',
	textDecoration = 'none',
}) => {
	const fontFamily = () => {
		switch (fontWeight) {
			case 400: {
				return 'Noto Sans Regular';
			}
			case 500: {
				return 'Noto Sans Medium';
			}
			case 700: {
				return 'Noto Sans Bold';
			}
			default: {
				return 'Noto Sans Regular';
			}
		}
	};
	return (
		<Typography
			sx={{
				fontFamily,
				color,
				fontSize,
				textAlign,
				width,
				margin,
				textTransform,
				lineHeight,
				textDecoration,
			}}>
			{children}
		</Typography>
	);
};
