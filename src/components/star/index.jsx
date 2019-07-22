import React from 'react';
import StarIcon from '@material-ui/icons/Star'; // full star
import StarBorderIcon from '@material-ui/icons/StarBorder'; // empty star
import PropTypes from 'prop-types';
import "./Star.css"

const Star = ({full, index, setHover, setStarCount}) => {

    return (
        <React.Fragment>
            {full ? (
                <StarIcon className="star-full" onClick={() => setStarCount(index)} onMouseOver={() => setHover(index)} />
            ) : (
                <StarBorderIcon className="star-empty" onClick={() => setStarCount(index)} onMouseOver={() => setHover(index)} />
            )}
        </React.Fragment>
    )
}

Star.propTypes = {
    full: PropTypes.bool,
    index: PropTypes.number,
    setHover: PropTypes.func,
    setStarCount: PropTypes.func,
};

export default Star;
