import React from 'react';

import { useState } from 'react';

import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

import Message from "./MyMessages";

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
        
        <div className="container">
    
          <div className="btn_ipt">
    
            <input className="input" type="text" value={inputValue} onChange={change} placeholder="New message" />
    
            <input className="input" type="text" value={SecondInputValue} onChange={(eventt) => {setSecondInputValue(eventt.target.value)}} placeholder="Name" />
    
            <button className="button" onClick={newMessage}>Add</button>
        
          </div>
    
          {Messages.map(function (Iteration, index) {
            return (
             <div key={index}>
                <Message name={Iteration.name} text={Iteration.text} icon={faUser} time={Iteration.time}/>
             </div>
            )
          })}
        </div>
        
      
)
}