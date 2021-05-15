import React from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import {} from 


function PantryItemList({pantry,query}) {
    console.log(pantry);
    return (
        <div>
        <>
                <PantryChipRow>
                        <Chip  style={{marginRight: '15px'}} className="not-active" label="All" variant="outlined" />
                        <Chip  style={{marginRight: '15px'}} className="not-active"  label="fruit and vegetables" variant="outlined" />
                        <Chip  style={{marginRight: '15px'}} className="not-active"  label="dairy" variant="outlined" />
                        <Chip  style={{marginRight: '15px'}} className="not-active"  label="canned-goods" variant="outlined" />
                        <Chip  style={{marginRight: '15px'}} className="not-active"  label="pasta-and-rice" variant="outlined" />
                        <Chip  style={{marginRight: '15px'}} className="not-active"  label="baking-items" variant="outlined" />
                </PantryChipRow>
            </>
        
            <>
                {pantry
                    .filter((val) => {
                        if (query === '') {
                            return val;
                        } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
                            return val;
                        }
                    })
                    .map((pantryVal, key) => (
                        <PantryItem key={pantryVal.id} pantry={pantryVal} />
                    ))}
            </>
            </div>
	);
}

const mapStateToProps = ({ pantry: { query } }) => {
	return {
		query,
	};
};



export default connect(mapStateToProps)(PantryItemList);