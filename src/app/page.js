'use client';  

import Link from 'next/link';

import "./globals.css";

import MyMainComponent from "./mainComponent/page";

import ChatWithDennis from "./chatWithDennis/page";

import ChatWithAlex from "./chatWithAlex/page";

import ChatWithArtem from "./chatWithArtem/page";

export default function App() {
  return (
    
    <div className="container">
      
      <h1>Select</h1>

      <Link href="/mainComponent">Chat</Link>

      <Link href="/chatWithAlex">Alex</Link>

      <Link href="/chatWithArtem">Artem</Link>

      <Link href="/chatWithDennis">Dennis</Link>
      
      </div>
  )
}
