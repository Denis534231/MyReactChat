"use client";

import "@/app/globals.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faGear,
  faHouse,
  faUserGroup,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHat">
        <FontAwesomeIcon icon={faUser} className="sidebarUserIcon" />

        <p className="sidebarUserName">Denchik</p>
      </div>

      <div className="sideBarLinks-Settings">
        <div className="sideBarLinks">
          <Link href="/" className="link-icon">
            <FontAwesomeIcon icon={faHouse} className="sideBarIcon" />
            <p className="sideBarLink">Home</p>
          </Link>

          <Link href="/chat/pm" className="link-icon">
            <FontAwesomeIcon icon={faMessage} className="sideBarIcon" />
            <p className="sideBarLink">Chats</p>
          </Link>

          <Link href="chat/groups" className="link-icon">
            <FontAwesomeIcon icon={faUserGroup} className="sideBarIcon" />
            <p className="sideBarLink">Groups</p>
          </Link>
        </div>

        <Link href="/chat/settings" className="sideBarSettings">
          <FontAwesomeIcon icon={faGear} className="sideBarSettingsIcon" />
          <p className="sideBarSettingsLink">Settings</p>
        </Link>
      </div>
    </div>
  );
}
