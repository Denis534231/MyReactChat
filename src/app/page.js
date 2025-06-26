"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return messages.map((msg) => (
    <div>
      {msg.name}: {msg.text}
    </div>
  ));
}
