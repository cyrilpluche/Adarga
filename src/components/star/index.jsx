import React from 'react';
import StarIcon from '@material-ui/icons/Star'; // full star
import StarBorderIcon from '@material-ui/icons/StarBorder'; // empty star
import "./Star.css"

const Star = props => {

    const {full, index} = props
    const {setHover, setStarCount} = props

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

export default Star;