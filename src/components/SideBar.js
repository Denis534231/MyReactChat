"use client";

import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [openChats, setOpenChats] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [chatLinks, setChatLinks] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [openModalWindow, setOpenModalWindow] = useState(false);

  const handleAddChat = () => {
    if (!newChat.trim()) return;
    setChatLinks([...chatLinks, newChat]);
    setNewChat("");
    router.push(`/chat/pm/${newChat}`);
    setOpenModalWindow(false);
  };

  const handleOpenModalWindow = () => {
    setOpenModalWindow(!openModalWindow);
  };

  let arrowIconChats;
  let arrowIconGroups;

  if (openChats == true) {
    arrowIconChats = <IoIosArrowDown />;
  } else {
    arrowIconChats = <IoIosArrowForward />;
  }
  if (openGroups) {
    arrowIconGroups = <IoIosArrowDown />;
  } else {
    arrowIconGroups = <IoIosArrowForward />;
  }

  const isActive = (path) => (pathname === path ? "active" : "");

  return (
    <div className="sidebar">
      <div className="sidebarHat">
        <FontAwesomeIcon icon={faUser} className="sidebarUserIcon" />
        <p className="sidebarUserName">Denchik</p>
      </div>

      <button onClick={handleOpenModalWindow}>+</button>
      {openModalWindow === true && (
        <div className="modal-content">
          <div className="modalClose">
            <button
              className="modalCloseButton"
              onClick={handleOpenModalWindow}
            >
              ❌
            </button>
          </div>
          <h1 className="modalText">Open a new PM</h1>
          <p>username:</p>
          <div className="modalInputButton">
            <input
              value={newChat}
              onChange={(e) => setNewChat(e.target.value)}
              placeholder="New chat"
              className="addGroupInput"
            />
            <div className="modalAddButton">
              <button onClick={handleAddChat} className="addChatButton">
                Go
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="sideBarLinks-Settings">
        <div className="sideBarLinks">
          <Link href="/" className={`link-icon ${isActive("/")}`}>
            <FontAwesomeIcon icon={faHouse} className="sideBarIcon" />
            <p className={"sideBarLink"}>Home</p>
          </Link>

          <button
            className="toggle-btn link-icon"
            onClick={() => setOpenChats(!openChats)}
          >
            <FontAwesomeIcon icon={faMessage} className="sideBarIcon" />
            <p className="sideBarLink">Chats</p>
            {arrowIconChats}
          </button>

          {openChats && (
            <div className="chatsOpened">
              <Link
                href="/chat/pm/Artem"
                className={`sideBarOpenedLink ${isActive("/chat/pm/Artem")}`}
              >
                link
              </Link>
              <Link
                href="/chat/pm/chatWithArtem"
                className={`sideBarOpenedLink ${isActive(
                  "/chat/pm/chatWithArtem"
                )}`}
              >
                Artem
              </Link>

              {chatLinks.map((chat, index) => (
                <Link
                  key={index}
                  className={`${isActive(`/chat/pm/${chat}`)} addedLink `}
                  href={`/chat/pm/${chat}`}
                >
                  {chat}
                </Link>
              ))}
            </div>
          )}

          <button
            className="toggle-btn link-icon"
            onClick={() => setOpenGroups(!openGroups)}
          >
            <FontAwesomeIcon icon={faUserGroup} className="sideBarIcon" />
            <p className="sideBarLink">Groups</p>
            {arrowIconGroups}
          </button>
        </div>

        <div className="groupsOpened-settings">
          {openGroups && (
            <div className="opened">
              <button
                onClick={() => router.push("/chat/newGroup")}
                className={`addNewGroup ${isActive("/chat/newGroup")}`}
              >
                Add a new group
              </button>
            </div>
          )}

          <Link
            href="/chat/settings"
            className={`sideBarSettings ${isActive("/chat/settings")}`}
          >
            <FontAwesomeIcon icon={faGear} className="sideBarSettingsIcon" />
            <p className="sideBarSettingsLink">Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
