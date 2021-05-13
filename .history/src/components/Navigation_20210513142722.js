import React, {useState} from 'react';
import { Header } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import { SearchIcon, CheffCap, PantryLogo } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from 'material-ui-search-bar';


export default function Navigation() {
    
    const [showSearch, setShowSearch] = useState(false);
    
    return (
		<Header>
			<div className="container header-wrapper">
				{/* <PantryLogo /> */}
				<ul style={{ background: 'pink' }}>
					

					{showSearch ? (
						<SearchBar
						// value={this.state.value}
						// onChange={(newValue) => this.setState({ value: newValue })}
						// onRequestSearch={() => doSomethingWith(this.state.value)}
						/>
					) : }

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
