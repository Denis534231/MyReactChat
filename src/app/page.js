'use client';  

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MyMainComponent from "./components/MainComponent";

import Group from "./components/Group";

export default function App() {
  return (
    <>
      <h1>Select</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="Chat">Chat </Link>
          </li>
  
          <li>
            <Link to="Group"> Group </Link>{" "}
          </li>
        </ul>
  
        <Routes>
          <Route path="Chat" element={<MyMainComponent />} />
          <Route path="Group" element={<Group />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
  

