import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import RedArrowRight from '../assets/img/red-arrow-right.svg';
import { TextComponent } from '../components/text-component';

interface stepHeadingWidget {
	children: JSX.Element | string;
}

export const StepHeadingWidget: FunctionComponent<stepHeadingWidget> = ({
	children,
}) => {
	return (
		<Grid container>
			<Grid
				item
				xs={0.5}>
				<Image
					src={RedArrowRight.src}
					width={10}
					height={8}
					alt={'arrow'}></Image>
			</Grid>
			<Grid
				item
				xs={11.5}>
				<TextComponent
					fontSize={18}
					fontWeight={500}
					color={'#171717'}>
					{children}
				</TextComponent>
			</Grid>
		</Grid>
	);
};
