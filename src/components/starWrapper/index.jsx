import React from 'react';
import Star from '../star/index'

const starWrapper = props => {

    const {starCount, clickedStarCount, hover} = props
    const {setHover, setStarCount} = props
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

export default starWrapper;