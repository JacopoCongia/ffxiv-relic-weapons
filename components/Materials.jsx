import React from 'react';

function Materials(props) {
    return (
        <div className='materials-container'>
            <p className='tomestone'>
            <img 
                className='tomestone-icon'
                alt={props.tomestone}
                src={props.tomestoneIcon}
            />
            {props.tomestone}: {(props.materials / props.materialQuantity) * props.tomestoneQuantity}
            </p>
            <p className='primary-materials'>
                <img 
                    className='material-icon'
                    alt={props.materialName}
                    src={props.icon}
                />
            {props.materialName}: {props.materials}
            </p>
          </div>
    )
}

export default Materials;