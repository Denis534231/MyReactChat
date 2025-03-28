'use client';  

import "./globals.css";

import Link from 'next/link';

export default function Sidebar() {
  return (
    
    <div className="container">
      
      <h1>Select</h1>

      <Link href="/">Home</Link>

      <Link href="/directMessages">Chats</Link>

      <Link href="/groups">Groups</Link>
      
      </div>
  )
}