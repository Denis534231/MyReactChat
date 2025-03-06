'use client';  

import { useState } from 'react' 

import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

import Message from "./components/MyMessages";


export default function MyMainComponent() {
  
  const message_text = [

    { id: 1, name: "Denis", time: "9:22", text: "hello everybody", icon: faUser },

    { id: 2, name: "Alex", time: "9:23", text: "hello", icon: faUserSecret },

    { id: 3, name: "Artem", time: "9:24", text: "hi", icon: faUserNinja },

    { id: 4, name: "Denis", time: "9:25", text: "how are you doing guys?", icon: faUser },

    { id: 5, name: "Alex", time: "9:26", text: "i'm good, thank you", icon: faUserSecret },

    { id: 6, name: "Artem", time: "9:27", text: "me as well", icon: faUserNinja },

    { id: 7, name: "Denis", time: "9:28", text: "good bye", icon: faUser },

    { id: 8, name: "Alex", time: "9:29", text: "bye", icon: faUserSecret },

    { id: 9, name: "Artem", time: "9:30", text: "see you soon", icon: faUserNinja },
    
  ]

 
  const click = () => {
    console.log(Messages)
  }

  const newMessage = () => {

    const timeNow = new Date().toLocaleTimeString()
    setMessages([...Messages, {text: inputValue, name: SecondInputValue, time: timeNow }])
    setInputValue('')

  }
  

  const change = (event) =>  {

    setInputValue(event.target.value)
    
  }

  const [Messages, setMessages] = useState([{name: "Denis", time: "9:22", text: "hello everybody", icon: faUser },

    {name: "Alex", time: "9:23", text: "hello", icon: faUserSecret },

    {name: "Artem", time: "9:24", text: "hi", icon: faUserNinja }])

  const [inputValue, setInputValue] = useState('')

  const [SecondInputValue, setSecondInputValue] = useState('')

  
 
  return (
    <div className="container">

      <div className="btn_ipt">

        <input className="input" type="text" value={inputValue} onChange={change} placeholder="New message" />

        <input className="input" type="text" value={SecondInputValue} onChange={(eventt) => {setSecondInputValue(eventt.target.value)}} placeholder="Name" />

        <button className="button" onClick={newMessage}>Add</button>

        <button className="button" onClick={click}>Checking</button>

        <input className="input" type="text" value={SecondInputValue} onChange={(eventt) => {setSecondInputValue(eventt.target.value)}} placeholder="New group" />

        
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





