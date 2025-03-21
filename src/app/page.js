'use client';  

import "./globals.css";

import Link from 'next/link';

export default function Sidebar() {
  return (
    
    <div className="sidebar">
      
      <h1>Select</h1>

      <Link href="/">Home</Link>

      <Link href="/chats">Chats</Link>

      <Link href="/groups">Groups</Link>
      
      </div>
  )
}