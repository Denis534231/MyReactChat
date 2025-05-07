"use client";

import React from "react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserSecret,
  faUserNinja,
  faUser,
  faPaperPlane,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

import { IoCheckmarkDoneOutline } from "react-icons/io5";

import Message from "@/components/Message";

import ChatHeader from "@/components/ChatHeader";

import MessagesList from "@/components/MessagesList";

import ChatFooter from "@/components/ChatFooter";

export default function ChatWithArtem() {
  const [Messages, setMessages] = useState([
    { name: "Arteem", time: "9:22", text: "Hello, Denys" },

    { name: "Denys", time: "9:23", text: "Hello" },

    { name: "Arteem", time: "9:24", text: "How are you?" },

    { name: "Arteem", time: "9:22", text: "Are you free tomorrow?" },

    { name: "Denys", time: "9:23", text: "I feel great, yes, I'm free" },
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
    if (e.key === "Enter") {
      newMessage();
    }
  };

  return (
    <>
      <div className="chat-wrapper">
        <ChatHeader />
        <MessagesList Messages={Messages} />
        <ChatFooter
          inputValue={inputValue}
          change={change}
          handleEnterKey={handleEnterKey}
          newMessage={newMessage}
        />
      </div>
    </>
  );
}
