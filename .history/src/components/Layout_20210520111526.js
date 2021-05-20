import React from 'react';
import Navigation from './Navigation';
import { FooterText,FooterWrapper } from '../styles/FooterStyles';
import { AddIcon } from '../assets/Logos/svg/icons';
import Button from '@material-ui/core/Button';
import { MainLayout } from '../styles/LayoutStyles';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import {} from 'react'

export default function Layout({children,props}) {
    console.log(props)
	return (
		<>
			<Navigation />
			<MainLayout className="container">
				{children}
				<Link to="/pantryitems/new">
					<Button style={{ outline: 'none' }}>
						<AddIcon />
					</Button>
				</Link>
			</MainLayout>
			<FooterWrapper>
				<Divider/>
				<FooterText>&copy; Pantry App</FooterText>
			</FooterWrapper>
		</>
	);
}
