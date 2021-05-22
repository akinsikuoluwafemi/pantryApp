// category = ['meat-and-poultry', 'canned-goods', 'pasta-and-rice', 'baking-items', 'snacks', 'breakfast-foods', 'nuts-and-seeds', 'mixes', 'vinegars-and-cooking-wines', 'oils', 'sauces', 'condiments', 'sweets-and-candy', 'pickled-items', 'cereals', 'spices', 'beverages', 'root-vegetables', 'breads', 'soups', 'fruits-and-vegetables', 'pet-food', 'beans-and-legumes', 'jellies-and-spreads', 'canned-meats', 'miscellaneous' ]

export const categoryArr = [
	'All',
	'meat-and-poultry',
	'fruit-and-vegetables',
	'dairy',
	'canned-goods',
	'pasta-and-rice',
	'baking-items',
];

export const pantryArr = [
	{
		id: 1,
		category: 'meat-and-poultry',
		name: 'whole-chicken',
		createdAt: '01-02-2021',
		expiry: '2021-03-21',
		weight: 8,
		unit: 'pounds',
		quantity: 2,
		imageSrc: 'https://res.cloudinary.com/dt69gb9me/image/upload/v1621458677/whole-chicken_m9p8vy.png',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 2,
		category: 'meat-and-poultry',
		name: 'Beef-Tenderloin',
		createdAt: '01/04/2021',
		expiry: '14/04/2021',
		weight: 3,
		unit: 'pounds',
		quantity: 3,
		imageSrc:
			'https://res.cloudinary.com/dt69gb9me/image/upload/v1621458599/png-clipart-beefsteak-matsusaka-beef-meat-beef-tenderloin-meat-food-beef-removebg-preview_ycn6ms.png',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 3,
		category: 'meat-and-poultry',
		name: 'lamb-chops',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 10,
		unit: 'pounds',
		quantity: 1,
		imageSrc: 'https://res.cloudinary.com/dt69gb9me/image/upload/v1621458559/lamb_chop_n9f1zf.png',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 4,
		category: 'meat-and-poultry',
		name: 'turkey-legs',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 5,
		unit: 'pounds',
		quantity: 6,
		imageSrc:
			'https://res.cloudinary.com/dt69gb9me/image/upload/v1621458442/51-515626_turkey-leg-png-transparent-library-duck-legs-removebg-preview_fphdvi.png',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 5,
		category: 'meat-and-poultry',
		name: 'pork-chops',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 6,
		unit: 'pounds',
		quantity: 1,
		imageSrc:
			'https://res.cloudinary.com/dt69gb9me/image/upload/v1621458498/image_pork_bonein-pork-chops-removebg-preview_fizpnj.png',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 6,
		category: 'baking-items',
		name: 'baked beans',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 2,
		unit: 'pounds',
		quantity: 5,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},

	{
		id: 7,
		category: 'fruit-and-vegetables',
		name: 'apple',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 2,
		unit: 'pounds',
		quantity: 5,
		imageSrc: 'https://res.cloudinary.com/dt69gb9me/image/upload/v1621464994/apple_jixf3m.jpg',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 8,
		category: 'canned-goods',
		name: 'baked-beans',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		unit: 'pounds',
		weight: 2,
		quantity: 5,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 9,
		category: 'dairy',
		name: 'cheese',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 1,
		unit: 'pounds',

		quantity: 4,
		imageSrc: 'https://res.cloudinary.com/dt69gb9me/image/upload/v1621466114/cheese_yso9in.jpg',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
	{
		id: 10,
		category: 'pasta-and-rice',
		name: 'baked beans',
		createdAt: '01/03/2019',
		expiry: '14/04/2021',
		weight: 2,
		unit: 'pounds',

		quantity: 5,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		bool: true,
	},
];


export const cateredRecipes = [
	{
		id: 1,
		type: 'african',
		name: 'jollof rice',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: true,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 2,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 3,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 4,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 5,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 6,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 7,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 8,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 9,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 10,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 11,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 12,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 13,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 14,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 15,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
	{
		id: 16,
		type: 'asian',
		name: 'asian chilli chi..',
		time: '1 hour',
		prepTime: '20 mins',
		cookTime: '40mins',
		favourites: false,
		imageSrc:
			'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		nutrients: ['750 Calories', '545 Cabohydrates', '55 Protein', '130 Fat'],
		numServings: 3,
		ingredients: [
			'3 Tbsp. kosher salt, plus more',
			'4oz. pancetta (Italian bacon)',
			'4oz. Parmesan',
			'2 large egg yolks',
			'2 Freshly ground black pepper',
			'2 Tbsp. extra-virgin olive oil',
		],
		instructions: [
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
			'Heat 6 qt. water in a large pot over high, then add 3 Tbsp. salt and cover pot with a lid. ',
			'Remove 4 oz. guanciale and cut into about 1x¼ strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later',
			'Whisk 4 egg yolks and 2 whole eggs in a medium bowl, then stir grated cheese',
		],
	},
];
