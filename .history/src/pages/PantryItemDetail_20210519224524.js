// import React from 'react';
// import { PantryDetailSection, PantryImageWrapper } from '../styles/PantryDetailStyles';
// import { connect } from 'react-redux';
// import { HeaderTitle } from '../styles/TextStyles';
// import Button from '@material-ui/core/Button';
// import WholeChicken from '../assets/images/whole-chicken.png';
// import { Space } from 'antd';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import { PantryListValues } from '../styles/PantryItemStyles';
// import { PantryDetailValuesWrapper, PantryDetailTimeWrapper } from '../styles/PantryDetailStyles';
// import Chip from '@material-ui/core/Chip';



//  function PantryItemDetail({ pantryDetail }) {
// 	 return (
// 			<PantryDetailSection
// 				initial={{ scaleY: 0 }}
// 				animate={{ scaleY: 1 }}
// 				exit={{ scaleY: 0 }}
// 				transition={{ duration: 0.5 }}
// 			>
// 				{pantryDetail.map((item) => {
// 	 			const { name, category, createdAt, expiry, notes, quantity, imageSrc, weight } = item;
					
// 					return (
// 						<>
// 							<HeaderTitle small>{name}</HeaderTitle>
// 							<PantryImageWrapper>
// 								<img className="img-fluid" src={WholeChicken} alt={name} />
// 							</PantryImageWrapper>

// 							<Space size="middle">
// 								<Button
// 									style={{ outline: 'none' }}
// 									variant="outlined"
// 									color="default"
// 									// className={classes.button}
// 									startIcon={<EditIcon />}
// 								>
// 									Edit
// 								</Button>
// 								<Button
// 									style={{ outline: 'none' }}
// 									variant="outlined"
// 									color="secondary"
// 									// className={classes.button}
// 									startIcon={<DeleteIcon />}
// 								>
// 									Delete
// 								</Button>
// 							</Space>

// 							<PantryDetailValuesWrapper>
// 								<span
// 									className="text-center"
// 									style={{ color: '#BCBCBC', display: 'flex', alignItems: 'center' }}
// 								>
// 									<Chip
// 										size="small"
// 										style={{ color: '#222', background: '#FDC039', marginRight: '2rem' }}
// 										label={quantity}
// 									/>

// 									<PantryListValues start space>
// 										<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{name}</span>
// 										<span style={{ color: '#BCBCBC' }}>{weight}lb</span>
// 									</PantryListValues>
// 								</span>
// 								<PantryDetailTimeWrapper>
// 									<span>Best Before: {expiry}</span>
// 									<span>Created At: {createdAt}</span>
// 								</PantryDetailTimeWrapper>
// 							</PantryDetailValuesWrapper>
// 							<p style={{fontWeight: 'bold'}}>Notes</p>
// 							<p style={{textTransform: 'capitalize'}}>{notes}</p>
// 						</>
// 					);
// 				}
					
// 				)}

// 				{/* PantryItemDetail */}
// 			</PantryDetailSection>
// 		);
//  }

//  const mapStateToProps = ({ pantry: { pantryDetail } }) => {
// 		console.log(pantryDetail);
// 		return {
// 			pantryDetail,
// 		};
//  };



// export default connect(mapStateToProps)(PantryItemDetail);


import React from 'react';
import { PantryDetailSection, PantryImageWrapper } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import Button from '@material-ui/core/Button';
import WholeChicken from '../assets/images/whole-chicken.png';
import { Space } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { PantryListValues } from '../styles/PantryItemStyles';
import { PantryDetailValuesWrapper, PantryDetailTimeWrapper } from '../styles/PantryDetailStyles';
import Chip from '@material-ui/core/Chip';

function PantryItemDetail({ pantryDetail }) {
	const { name, category, notes, weight, quantity, expiry, createdAt, imageSrc } = pantryDetail;

	return (
		<PantryDetailSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
			<>
				<HeaderTitle small>{name}</HeaderTitle>
				<PantryImageWrapper>
					<img className="img-fluid" src={imageSrc} alt={name} />
				</PantryImageWrapper>

				<Space size="middle">
					<Button
						style={{ outline: 'none' }}
						variant="outlined"
						color="default"
						// className={classes.button}
						startIcon={<EditIcon />}
					>
						Edit
					</Button>
					<Button
						style={{ outline: 'none' }}
						variant="outlined"
						color="secondary"
						// className={classes.button}
						startIcon={<DeleteIcon />}
					>
						Delete
					</Button>
				</Space>

				<PantryDetailValuesWrapper>
					<span className="text-center" style={{ color: '#BCBCBC', display: 'flex', alignItems: 'center' }}>
						<Chip
							size="small"
							style={{ color: '#222', background: '#FDC039', marginRight: '2rem' }}
							label={quantity}
						/>

						<PantryListValues start space>
							<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{name}</span>
							<span style={{ color: '#BCBCBC' }}>{weight}lb</span>
						</PantryListValues>
					</span>
					<PantryDetailTimeWrapper>
						<span>Best Before: {expiry}</span>
						<span>Created At: {createdAt}</span>
					</PantryDetailTimeWrapper>
				</PantryDetailValuesWrapper>
				<p style={{ fontWeight: 'bold' }}>Notes</p>
				<p style={{ textTransform: 'capitalize' }}>{notes}</p>
			</>

			{/* PantryItemDetail */}
		</PantryDetailSection>
	);
}

const mapStateToProps = ({ pantry: { pantryDetail } }) => {
	console.log(pantryDetail);
	return {
		pantryDetail,
	};
};

export default connect(mapStateToProps)(PantryItemDetail);