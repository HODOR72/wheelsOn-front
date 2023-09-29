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
				return 'Euclid Circular Regular';
			}
			case 500: {
				return 'Euclid Circular Medium';
			}
			case 700: {
				return 'Euclid Circular Bold';
			}
			default: {
				return 'Euclid Circular Regular';
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
