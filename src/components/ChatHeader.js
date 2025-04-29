import "../app/globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";

const ChatHeader = () => {
    
  return (

    <div className="hat">

      <FontAwesomeIcon icon={faUser} className="TemporaryDenysIcon" />

      <p className="TemporaryDenysName">Artem</p>

    </div>

  );

};

export default ChatHeader;
