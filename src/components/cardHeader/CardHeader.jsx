import React from 'react';
import seriesIcon from '../../icons/series-icon.png';

const CardHeader = ({ workouts, image }) => {
    return (
        <picture className="thumbnail">
            {workouts > 0 ? (
                <div className="thumbnail-workouts">
                    <img className="image-cover" src={image} alt="cover"></img>
                    <div className="overlay">
                        <h2>{workouts}</h2>
                        <p>WORKOUTS</p>
                        <img
                            className="icon"
                            src={seriesIcon}
                            alt="series-icon"
                        ></img>
                    </div>
                </div>
            ) : (
                <img className="image-cover" src={image} alt="cover"></img>
            )}
        </picture>
    );
};

export default CardHeader;
