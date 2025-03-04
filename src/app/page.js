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

  const Check = () => {

  console.log(Messages)

  }

  const newMessage = () => {

    setMessages([...Messages, inputValue])
    setInputValue('')

  }
  

  const change = (event) =>  {

    setInputValue(event.target.value)
    
  }

  const [Messages, setMessages] = useState([])

  const [inputValue, setInputValue] = useState('')

  const [SecondinputValue, setSecondinputValue] = useState('')
 
  return (
    <div className="container">

      <div className="btn_ipt">

        <input className="input" type="text" value={inputValue} onChange={change} placeholder="New message" />

        <input className="input" type="text" value={SecondinputValue} onChange={(eventt) => {setSecondinputValue(eventt.target.value)}} placeholder="Add name" />

        <button className="button" onClick={newMessage}>Add</button>

        <button className="button" onClick={Check}>Checking</button>
      </div>

      {Messages.map(function (Iteration, index) {
        return (
          <div key={index}>
         <Message name={SecondinputValue} icon={faUser} text={Iteration} time='22:22'/>
         </div>
        )
      })}
    </div>
  )
}





