import React from 'react';
import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';

const Card = ({ details }) => {
    const { trainer, meters, workouts, image, title, time } = details;
    return (
        <article className="card">
            <CardHeader image={image} workouts={workouts} />
            <CardBody
                title={title}
                time={time}
                meters={meters}
                trainer={trainer}
            />
        </article>
    );
};

export default Card;
