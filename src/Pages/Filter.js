import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Filter() {
    return (
        <>
            <div className="filter">
                <div className="filterBtn">
                    <button><FontAwesomeIcon icon={faSliders} /> Filters</button>
                    <button>Rating: 4.0+</button>
                    <button>Cuisines <FontAwesomeIcon icon={faAngleDown} /></button>
                </div>
            </div>
        </>
    )
}

export default Filter