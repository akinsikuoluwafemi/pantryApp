import React from 'react';
import { PantryDetailSection, PantryImageWrapper } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import Button from '@material-ui/core/Button';
import WholeChicken from '../assets/images/whole-chicken.png';
import { Space } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

 function PantryItemDetail({ pantryDetail }) {
	 return (
			<PantryDetailSection
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.5 }}
			>
				{pantryDetail.map((item) => {
	 			const { name, category, createdAt, expiry, note, quantity, imageSrc, weight } = item;
					
					return (
						<>
							<HeaderTitle small>{name}</HeaderTitle>
							<PantryImageWrapper>
								<img className="img-fluid" src={WholeChicken} alt={name} />
							</PantryImageWrapper>

							<Space size="middle">
								<Button
									style={{ color: '#F06241', borderColor: '#F06241', outline: 'none' }}
									variant="outlined"
								>
									Edit
								</Button>
								<Button
									variant="outlined"
									color="secondary"
									// className={classes.button}
									startIcon={<DeleteIcon />}
								>
									Delete
								</Button>
								<Button
									variant="outlined"
									color="secondary"
									// className={classes.button}
									startIcon={<DeleteIcon />}
								>
									Delete
								</Button>
							</Space>
						</>
					);
				}
					
				)}

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