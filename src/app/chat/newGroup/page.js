"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RouteInput() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddRoute = () => {
    router.push(`/chat/pm/${inputValue}`);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddRoute}>Add a new group</button>
    </div>
  );
}
