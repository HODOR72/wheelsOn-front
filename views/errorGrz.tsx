import React, { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import errorGrz from '../assets/img/error-grz.png';
import Image from 'next/image';
import { TextComponent } from '../components/text-component';
export const ErrorGrz: FunctionComponent = () => {
	return (
		<Box width={'100%'}>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Image
					src={errorGrz.src}
					width={122}
					height={135}
					alt={'error'}></Image>
			</Box>

			<TextComponent
				fontWeight={700}
				fontSize={25}
				textAlign={'center'}
				textTransform={'initial'}
				margin={'0'}>
				Произошла ошибка!
			</TextComponent>
			<TextComponent
				fontWeight={400}
				fontSize={14}
				textAlign={'center'}
				textTransform={'initial'}
				color={'#6F7182'}
				margin={'0 0 1em 0'}>
				Введенный ГРЗ не был найден
			</TextComponent>
		</Box>
	);
};
