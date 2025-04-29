import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ inputValue, change, handleEnterKey, newMessage }) => {

  return (

    <div className="btn_ipt">

      <button className="plus">

        <FontAwesomeIcon icon={faSquarePlus} />

      </button>

      <input
        className="inputArtem"
        type="text"
        value={inputValue}
        onChange={change}
        placeholder="Hi, Artem"
        onKeyDown={handleEnterKey}
      />

      <button className="send" onClick={newMessage}>

        <FontAwesomeIcon icon={faPaperPlane} />

      </button>

    </div>

  );

};

export default Footer;
