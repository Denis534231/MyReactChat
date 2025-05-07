"use client";

import React from "react";

import Link from "next/link";

export default function directMesssages() {
  return (
    <div className="container">
      <Link href="/chat/pm/Artem">link</Link>
      <Link href="/chat/pm/chatWithArtem">Artem</Link>
    </div>
  );
}
