import React, {useState} from 'react';
import { Header, Headerlist } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import { SearchIcon, CheffCap } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from 'material-ui-search-bar';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import './Navigation.css';



export default function Navigation() {
    
    const [showSearch, setShowSearch] = useState(false);
    
    return (
		<Header>
			<div className="container header-wrapper">
				<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" className="mr-auto" />
				<Headerlist>
					{/* <IconButton
						onClick={() => setShowSearch(true)}
						style={{ outline: 'none', marginRight: '1rem' }}
						aria-label="search"
						color="inherit"
					>
						<SearchIcon />
                    </IconButton> */}

					<form id="demo-2" style={{ outline: 'none', marginRight: '1rem' }}>
						<input type="search" placeholder="Search" />
					</form>

					<span>
						<CheffCap alt="pantry-items" />
					</span>
					{/* <Link to="/pantryitems">PantryItems</Link> */}
					{/* <Link to="/pantryitems/3">Pantry details</Link> */}
					{/* <Link to="/new">new Items</Link> */}
				</Headerlist>
			</div>
		</Header>
	);
}
