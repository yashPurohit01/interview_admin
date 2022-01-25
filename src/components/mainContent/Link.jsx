import React, { useState } from "react";
import "../../styles/components/mainContent/LinkShare.css";
import { FaClone } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
function LinkShare() {
  const [inputvalue, setInputvalue] = useState("");
  return (
    <div>
      <div className="container">
        <div className="label"> Link Share</div>
        <div className="copy-text">
          <input
            type="text"
            className="text"
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <CopyToClipboard text={inputvalue}>
            <button>
              <FaClone />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default LinkShare;
