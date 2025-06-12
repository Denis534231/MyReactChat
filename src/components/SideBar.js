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
  faXmark,
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
    setOpenChats(true);
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
      <div className="sideBarLinks-Settings">
        <div className="sideBarLinks">
          <Link href="/" className={`link-icon ${isActive("/")}`}>
            <FontAwesomeIcon icon={faHouse} className="sideBarIcon" />
            <p className={"sideBarLink"}>Home</p>
          </Link>
          <div className="link-icon">
            <button
              className="toggle-btn link-icon"
              onClick={() => setOpenChats(!openChats)}
            >
              <FontAwesomeIcon icon={faMessage} className="sideBarIcon" />
              <p className="sideBarLink">Chats</p>
              {arrowIconChats}
            </button>
            <button
              className="modalWindowOpenButton"
              onClick={handleOpenModalWindow}
            >
              +
            </button>
          </div>
          {/* <button onClick={() => setOpenModalWindow(true)}>Open Modal</button> */}
          {openModalWindow && (
            <div
              className="modal-overlay"
              onClick={() => setOpenModalWindow(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="modal-window"
              >
                <div className="modalClose">
                  <button
                    className="modalCloseButton"
                    onClick={handleOpenModalWindow}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="modalCloseIcon"
                    />
                  </button>
                </div>
                <h1 className="modalText">Open a new PM</h1>
                <div class="line"></div>
                <div className="modalUsername-input">
                  <p className="modalUsername">Username</p>{" "}
                  <div className="modalInput-Button">
                    <input
                      value={newChat}
                      onChange={(e) => setNewChat(e.target.value)}
                      placeholder="Enter username"
                      className="modalInput"
                    />
                    <div className="modalAddButton">
                      <button onClick={handleAddChat} className="addChatButton">
                        Go
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openChats && (
            <div className="chatsOpened">
              <Link
                href="/chat/pm/Username"
                className={`sideBarOpenedLink ${isActive("/chat/pm/chat")}`}
              >
                link
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
                <button
                  className="modalWindowOpenButton"
                  onClick={handleOpenModalWindow}
                >
                  +
                </button>
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
