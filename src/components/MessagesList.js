"use client";

import React from "react";
import Message from "@/components/Message";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function MessagesList({ Messages }) {
  return (
    <div className="messages-container">
      {Messages.map((Iteration, index) => (
        <div key={index}>
          <Message
            name={"Artem"}
            text={Iteration.text}
            icon={faUser}
            time={Iteration.time}
          />
        </div>
      ))}
    </div>
  );
}
