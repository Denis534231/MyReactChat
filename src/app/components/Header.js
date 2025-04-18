import "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
return(
<div className="hat">
          <FontAwesomeIcon icon={faUser} className="TemporaryDenysIcon" />

          <p className="TemporaryDenysName">Artem</p>
        </div>
)
}

export default Header;