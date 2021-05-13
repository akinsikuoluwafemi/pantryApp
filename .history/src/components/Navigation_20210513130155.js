import React from 'react'

export default function Navigation() {
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
					<span className="mr-4" onClick={() => alert('yes')}>
						<SearchIcon alt="search Icon" />
					</span>
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
