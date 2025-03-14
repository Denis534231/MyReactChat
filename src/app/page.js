'use client';  

import "./globals.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MyMainComponent from "./components/MainComponent";

import ChatWithDennis from "./components/ChatWithDennis";

import ChatWithAlex from "./components/ChatWithAlex";

import ChatWithArtem from "./components/ChatWithArtem";

export default function App() {
  return (
    
    
    <div className="containr">
      <h1>Select</h1>
      <BrowserRouter>
      
        <ul>
        <div className="container">
        <li>
            <Link to="/">Home </Link>
          </li>

          <li>
            <Link to="Chat">Chat </Link>
          </li>
  
          <li>
            <Link to="ChatWithDennis"> Dennis </Link>
          </li>

          <li>
            <Link to="ChatWithAlex"> Alex </Link>
          </li>

          <li>
            <Link to="ChatWithArtem"> Artem </Link>
          </li>
          </div>
        </ul>
        
        <Routes>
          <Route path="Chat" element={<MyMainComponent />} />
          <Route path="ChatWithDennis" element={<ChatWithDennis />} />
          <Route path="ChatWithAlex" element={<ChatWithAlex />} />
          <Route path="ChatWithArtem" element={<ChatWithArtem />} />
        </Routes>
      </BrowserRouter>
      
      </div>
  )
}
  
