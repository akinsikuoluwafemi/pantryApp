import React from 'react';
import { Header } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
import { SearchIcon, CheffCap } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon as SearcI from '@material-ui/icons/Search';


export default function Navigation() {
    const classes = useStyles();

    
    return (
		<Header>
			<div className="container header-wrapper">
				<img
					className="mr-auto"
					style={{ height: '5.5rem', borderRadius: '5px' }}
					src={PantryAppLogo}
					alt="pantry-app-logo"
				/>
				<ul>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearcI />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>

					<IconButton
						onClick={() => alert('yes')}
						style={{ outline: 'none', marginRight: '1rem' }}
						aria-label="search"
						color="inherit"
					>
						<SearchIcon />
					</IconButton>

					<span>
						<CheffCap alt="pantry-items" />
					</span>
					{/* <Link to="/pantryitems">PantryItems</Link> */}
					{/* <Link to="/pantryitems/3">Pantry details</Link> */}
					{/* <Link to="/new">new Items</Link> */}
				</ul>
			</div>
		</Header>
	);
}
