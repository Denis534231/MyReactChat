'use client';  

import React from 'react';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import Message from "../MyMessages";

 

export default function ChatWithArtem() {

      const newMessage = () => {
    
        const timeNow = new Date().toLocaleTimeString()
        setMessages([...Messages, {text: inputValue, name: SecondInputValue, time: timeNow }])
        setInputValue('')
    
      }
    
      const change = (event) =>  {
    
        setInputValue(event.target.value)
        
      }
    
      const [Messages, setMessages] = useState([{name: "Arteem", time: "9:22", text: "Hello, Denys"},
        
        {name: "Denys", time: "9:23", text: "Hello"  },
    
        {name: "Arteem", time: "9:24", text: "How are you?"  },
        
        {name: "Arteem", time: "9:22", text: "Are you free tomorrow?" },
    
        {name: "Denys", time: "9:23", text: "I feel great, yes, I'm free" },
    
        {name: "Arteem", time: "9:24", text: "Ok, i will meet you tomorrow then"}])
    
      const [inputValue, setInputValue] = useState('')
    
      const [SecondInputValue, setSecondInputValue] = useState('')
    
      
     
      return (
        <>
        <div className="container">
        <div className='hat'>
        <FontAwesomeIcon icon={faUser} className="TemporaryDenysIcon" />
        <p className='TemporaryDenysName'>Artem</p>
        </div>
      
          {Messages.map(function (Iteration, index) {
            return (
             <div key={index}>
                <Message name={'Test'} text={Iteration.text} icon={faUser} time={Iteration.time}/>
             </div>
            )
          })}
          <div className="btn_ipt">

            <button className='plus'><FontAwesomeIcon icon={faSquarePlus} /></button>

            <input className="inputArtem" type="text" value={inputValue} onChange={change} placeholder='Hi, Artem'/>

            <button className='send' onClick={newMessage}><FontAwesomeIcon icon={faPaperPlane} />  </button>  
        
          </div>

        </div>
        </>
      
)
}