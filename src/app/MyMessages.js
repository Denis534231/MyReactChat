'use client';  

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IoCheckmarkDoneOutline } from "react-icons/io5";


const Message = (props) => {
    return (
      <div className='container'>
        <div className="message">
          <div className="icon">
            <FontAwesomeIcon icon={props.icon} className={`icon-${props.name}`} />
          </div>
          <div className="text">
            <p className={props.name}>{props.text}</p>
          </div>
          <div className='name-time'>
            {/* <p className={`name name-${props.name}`}>{props.name}</p> */}
            <p className="time">{props.time}</p>
          </div>
          <div className='checkIcon'>
          <IoCheckmarkDoneOutline />
          </div>
        </div>
      </div>
    );
  }
  

export default Message;