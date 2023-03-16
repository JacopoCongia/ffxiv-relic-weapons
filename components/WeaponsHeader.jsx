import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function WeaponsHeader(props) {
    return (
        <div className='weapons-header' onClick={props.handleVisibility}>
            <p className='weapons-header--completed'>
                {props.totalWeapons - props.weaponsTruths}/{props.totalWeapons}
            </p>  
            <h4>
                {props.name}
                <span className='smaller-green'>{props.patchInfo}</span>
            </h4>
            {!props.visibility ? 
                <ExpandMoreIcon sx={{fontSize: '40px'}} /> : 
                <ExpandLessIcon sx={{fontSize: '40px'}} />
            }
        </div>
    )
} 
    
export default WeaponsHeader;