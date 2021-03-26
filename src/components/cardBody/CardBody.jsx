import React from 'react';
import Link from '../link/Link';
import timerIcon from '../../icons/timer-icon.png';
import trackIcon from '../../icons/track-icon.png';

const CardBody = ({ title, time, meters, avatar }) => {
    return (
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <div className="card-avatar">
                <img src={avatar} alt="avatar-icon"></img>
            </div>
            {time ? (
                <div class="post-meta">
                    <span class="timer">
                        <img src={timerIcon} alt="timer-icon"></img>
                        <span>{time}</span>
                    </span>
                    <span class="meters">
                        <img src={trackIcon} alt="track-icon"></img>
                        <span>
                            {meters
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                            M
                        </span>
                    </span>
                </div>
            ) : (
                ''
            )}
            <Link />
        </div>
    );
};

export default CardBody;
