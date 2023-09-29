import React, { FunctionComponent } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import { ListItemComponent } from '../components/list-item-component';

interface MenuItem {
	icon: string;
	text: string;
	href?: string;
	iconWidth: number;
	iconHeight: number;
	fontWeight?: number;
	onClick?(): any;
}

export const ListMenuItem: FunctionComponent<MenuItem> = ({
	icon,
	href = '',
	text,
	iconWidth = 30,
	iconHeight = 30,
	fontWeight = 400,
	onClick = () => { },
}) => {
	const router = useRouter();
	const onClickHandler = () => {
		if (href !== '') {
			router.push(href);
			return;
		}
		onClick();
	};
	return (
		<ListItemComponent onClick={onClickHandler}>
			<React.Fragment>
				<ListItemIcon sx={{ minWidth: 35, maxWidth: 42 }}>
					<ListItemAvatar>
						<Avatar
							src={icon}
							sx={{
								width: iconWidth,
								height: iconHeight,
								objectFit: 'contain',
							}}
							variant="square"
							alt="icon"></Avatar>
					</ListItemAvatar>
				</ListItemIcon>
				<ListItemText
					sx={{ maxWidth: 250 }}
					primaryTypographyProps={{
						sx: { fontSize: '14px', fontWeight: fontWeight, },
					}}
					primary={text}
				/>
			</React.Fragment>
		</ListItemComponent>
	);
};
