"use client";

import "@/app/globals.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHat">
        <FontAwesomeIcon icon={faUser} className="sidebarUserIcon" />

        <p className="sidebarUserName">Denchik</p>
      </div>

      <div className="sideBarLinks-Settings">
        
        <div className="sideBarLinks">
          <Link href="/" className="sideBarLink">Home</Link>

          <Link href="/chat/pm" className="sideBarLink">Chats</Link>

          <Link href="chat/groups" className="sideBarLink">Groups</Link>
        </div>

        <Link href="/chat/settings" className="sideBarSettings">
            <FontAwesomeIcon icon={faGear} className="sideBarSettingsIcon" />
            <p className="sideBarSettingsLink">Settings</p>
        </Link>

        </div>
    </div>

  );
}
