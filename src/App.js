import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import StarWrapper from './components/starWrapper';

function App() {
    const [stars, setStars] = useState(5);
    const [hoverIndex, setHoverIndex] = useState(-1)
    const [clickedStarCount, setClickedStarCount] = useState(null);

    function handleChange(e) {
        const newValue = e.target.value;
        setStars(newValue);
    }

    function handleInputLeave() {
        if (stars - 1 < clickedStarCount) setClickedStarCount(stars - 1)
    }

    return (
        <div className="StarApp">
            <ol>
                <li>Show the number of empty stars equal to the number provided in the input.</li>
                <li>On hover, all stars up until the point of the cursor should be lit.</li>
                <li>On click, the value should be stored in the state value "clickedStarCount", and the UI view
                    persisted.
                </li>
            </ol>

            <TextField
                id="star-count"
                label="Number of Stars"
                value={stars}
                onChange={handleChange}
                onBlur={handleInputLeave}
                margin="normal"
            />
            <StarWrapper starCount={stars} clickedStarCount={clickedStarCount} hover={hoverIndex} setHover={setHoverIndex} setStarCount={setClickedStarCount}/>
        </div>
    );
}

export default App;
