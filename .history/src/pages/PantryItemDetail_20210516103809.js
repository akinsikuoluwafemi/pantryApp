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
import Chip from '@material-ui/core/Chip';



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

							<span className="text-center" style={{ color: '#BCBCBC' }}>
								<Chip size="small" style={{ color: '#222', background: '#FDC039' }} label={quantity} />
							</span>

							<PantryListValues start space>
								<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{name}</span>
								<span style={{ color: '#BCBCBC' }}>{weight}lb</span>
							</PantryListValues>
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