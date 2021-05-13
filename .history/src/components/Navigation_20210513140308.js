import React, {useState} from 'react';
import { Header } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
import { SearchIcon, CheffCap } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from 'material-ui-search-bar';


export default function Navigation() {
    
    const [showSearch, setShowSearch] = useState(false);
    
    return (
		<Header>
			<div className="container header-wrapper">
				<img
					className="mr-auto"
					style={{ height: '5.5rem', borderRadius: '5px' }}
					src={PantryAppLogo}
					alt="pantry-app-logo"
				/>
				<ul style={{background: 'pink'}}>
					<IconButton
						onClick={() => setSh}
						style={{ outline: 'none', marginRight: '1rem' }}
						aria-label="search"
						color="inherit"
					>
						<SearchIcon />
					</IconButton>

					<SearchBar
						// value={this.state.value}
						// onChange={(newValue) => this.setState({ value: newValue })}
						// onRequestSearch={() => doSomethingWith(this.state.value)}
					/>

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
