import React, {useState} from 'react';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import { SearchIcon, CheffCap } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from 'material-ui-search-bar';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import './Navigation.css';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { setQueryField } from '../redux/actions/pantryActions';



function Navigation({query, setQueryField}) {
    

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setQueryField(e.target.value)
    }


    
    return (
        <>
		<Header>
				<HeaderWrapper className="container header-wrapper">
					<Link to="/">
					
					</Link>
				<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" className="mr-auto" />
				<Headerlist>
					

					<form onSubmit={handleSubmit} id="demo-2" style={{ outline: 'none', marginRight: '1rem' }}>
						<input type="search" placeholder="Search" value={query} onChange={handleChange}  />
					</form>

					<span>
						<CheffCap alt="pantry-items" />
					</span>
					{/* <Link to="/pantryitems">PantryItems</Link> */}
					{/* <Link to="/pantryitems/3">Pantry details</Link> */}
					{/* <Link to="/new">new Items</Link> */}
				</Headerlist>
			</HeaderWrapper>
            </Header>
            <Divider/>
        </>
        
	);
}

const mapStateToProps = ({pantry: {query}}) => {
    return {
        query
    }
}


export default connect(mapStateToProps, {setQueryField})(Navigation);