import React from 'react';
import PropTypes  from 'prop-types';

const ProgressBar = ({value,max}) => {
    return (
        <div>
            <progress value={value} max={max}/>
        </div>
    )
}

ProgressBar.PropTypes ={
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};
ProgressBar.defaultProps ={
    max:100
};

export default ProgressBar;
