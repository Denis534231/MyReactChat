"use client";

import "@/app/globals.css";

import Link from "next/link";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  faUser,
  faGear,
  faHouse,
  faUserGroup,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
  const router = useRouter();
  const [openChats, setOpenChats] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  let arrowIconChats;
  let arrowIconGroups;

  if (openChats) {
    arrowIconChats = <IoIosArrowDown />;
  } else {
    arrowIconChats = <IoIosArrowForward />;
  }
  if (openGroups) {
    arrowIconGroups = <IoIosArrowDown />;
  } else {
    arrowIconGroups = <IoIosArrowForward />;
  }
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

          <div className="link-icon">
            <FontAwesomeIcon icon={faMessage} className="sideBarIcon" />
            <p className="sideBarLink">Chats</p>
            <button
              className="toggle-btn"
              onClick={() => setOpenChats(!openChats)}
            >
              {arrowIconChats}
            </button>
          </div>
          {openChats && (
            <div className="opened">
              <Link href="/chat/pm/Artem" className="sideBarOpenedLink">
                link
              </Link>
              <Link href="/chat/pm/chatWithArtem" className="sideBarOpenedLink">
                Artem
              </Link>
            </div>
          )}

          <div className="link-icon">
            <FontAwesomeIcon icon={faUserGroup} className="sideBarIcon" />
            <p className="sideBarLink">Groups</p>
            <button
              className="toggle-btn"
              onClick={() => setOpenGroups(!openGroups)}
            >
              {arrowIconGroups}
            </button>
          </div>
        </div>
        <div className="groupsOpened-settings">
          {openGroups && (
            <div className="opened">
              <button
                onClick={() => router.push("chat/newGroup")}
                className="addNewGroup"
              >
                Add a new group
              </button>
            </div>
          )}

          <Link href="/chat/settings" className="sideBarSettings">
            <FontAwesomeIcon icon={faGear} className="sideBarSettingsIcon" />
            <p className="sideBarSettingsLink">Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
