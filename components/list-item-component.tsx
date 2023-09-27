import React, { FunctionComponent } from 'react';
import ListItem from '@mui/material/ListItem';

interface listMenuComponent {
	children: JSX.Element;
	padding?: string | number;
	onClick?(): any;
	className?: string;
}

export const ListItemComponent: FunctionComponent<listMenuComponent> = ({
	children,
	onClick = () => {},
	padding = '10px 16px',
	className = 'list-menu-item',
}) => {
	return (
		<ListItem
			className={className}
			sx={{
				borderRadius: '10px',
				padding: padding,
				boxShadow: '0px 10px 24px rgba(33, 33, 33, 0.15);',
				marginBottom: '1.4em',
			}}
			onClick={onClick}>
			{children}
		</ListItem>
	);
};
