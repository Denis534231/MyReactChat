import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function MyChat(props) {
    return (
        <div className='container'>


        <div className="message">
            <div className="icon">
                <FontAwesomeIcon icon={props.icon} className="UserIcon"/>
            </div>
        <div className='name-time'>
        <p className="name name-Denis">{props.name}</p>
        <p className="time">{props.time}</p>
        </div>
            <div className="text">
                <p className="Denis">{props.text}</p>
            </div>
        </div>
        </div>
        
    )
}

export default MyChat;



