import React from 'react';
import Star from '../star/index'
import PropTypes from 'prop-types';

const starWrapper = ({starCount, clickedStarCount, hover, setHover, setStarCount}) => {

    const stars = []

    const isFull = (i) => {
        return i <= hover ? true :
            hover === -1 ? (
                clickedStarCount !== null ? i <= clickedStarCount : false
            ) : false
    }

    for (let i = 0; i < starCount; i++) {
        stars.push(<Star full={isFull(i)} setHover={setHover} setStarCount={setStarCount} index={i} key={i}/>)
    }

    return (
        <div onMouseLeave={() => setHover(-1)}>
            {stars}
        </div>
    )
}

starWrapper.propTypes = {
    starCount: PropTypes.number.isRequired,
    clickedStarCount: PropTypes.number,
    hover: PropTypes.number.isRequired,
    setHover: PropTypes.func.isRequired,
    setStarCount: PropTypes.func.isRequired,
};

export default starWrapper;
