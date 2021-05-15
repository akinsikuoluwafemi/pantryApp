import React from 'react';
import PantryItem from './PantryItem';

export default function PantryItemList({pantry}) {
    console.log(pantry);
    return (
		<>
			{pantry
				.filter((val) => {
					if (query === '') {
						return val;
					} else if (val.name.toLowerCase().includes(query.toLowerCase())) {
						console.log(typeof val);
						return val;
					}
				})
				.map((pantry, key) => (
					<PantryItemList key={pantry.id} pantry={pantry} />
				))}
		</>
	);
}
