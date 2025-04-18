'use client';  

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IoCheckmarkDoneOutline } from "react-icons/io5";


const Message = (props) => {
    return (
      <div className='messages'>
      <div className="icon">
      <FontAwesomeIcon icon={props.icon} className={`icon-Test`} />
    </div>
        <div className="message">
          <div className='name-text'>
            <p className={`name name-${props.name}`}>{props.name}</p>
            <p className="text">{props.text}</p>
        </div>
          <div className='checkIcon-time'>
            <p className="time">{props.time}</p>
            <IoCheckmarkDoneOutline />
          </div>
        </div>
      </div>
    );
  }
  

export default Message;