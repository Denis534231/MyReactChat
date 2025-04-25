"use client";

import React from "react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserSecret, faUserNinja, faUser, faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { IoCheckmarkDoneOutline } from "react-icons/io5";

import Message from "../Message";

import Header from "../components/Header";


export default function ChatWithArtem() {

  const [Messages, setMessages] = useState([
    { name: "Arteem", time: "9:22", text: "Hello, Denys" },

    { name: "Denys", time: "9:23", text: "Hello" },

    { name: "Arteem", time: "9:24", text: "How are you?" },

    { name: "Arteem", time: "9:22", text: "Are you free tomorrow?" },

    { name: "Denys", time: "9:23", text: "I feel great, yes, I'm free" }
  ]);



  const [inputValue, setInputValue] = useState("");

  const [SecondInputValue, setSecondInputValue] = useState("");

  const newMessage = () => {
    if (!inputValue.trim()) return;
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    setMessages([
      ...Messages,
      { text: inputValue, name: SecondInputValue, time: `${hours}:${minutes}` },
    ]);
    setInputValue(""); 
  };

  const change = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      newMessage()
    }
  }   

  return (
    <>
     <div className="chat-wrapper">
        <Header/>
        <div className="messages-container">
           

        {Messages.map(function (Iteration, index) {
          return (
            <div>
              <Message
                key={index}
                name={"Artem"}
                text={Iteration.text}
                icon={faUser}
                time={Iteration.time}
              />
            </div>

          );
          
        })}

        </div>
        <div className="footer">
        <div className="btn_ipt">
          <button className="plus" >
            <FontAwesomeIcon icon={faSquarePlus} />
          </button>

          <input
            className="inputArtem"
            type="text"
            value={inputValue}
            onChange={change}
            placeholder="Hi, Artem"
            onKeyDown={handleEnterKey}
          />

          <button className="send" onClick={newMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />{" "}
          </button>
        </div>
        </div>
        </div>
    </>
  );
}
