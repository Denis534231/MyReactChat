"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function ChatFooter({
  inputValue,
  handleChange,
  handleEnterKey,
  newMessage,
}) {
  return (
    <div className="footer">
      <div className="btn_ipt">
        <button className="plus">
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
        <input
          className="inputArtem"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Hi, Artem"
          onKeyDown={handleEnterKey}
        />
        <button className="send" onClick={newMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
