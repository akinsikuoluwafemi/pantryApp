import React from 'react';
import { Header } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
// import { SearchIcon, CheffCap } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


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
							<SearcIcon />
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
