import React from "react";
import "./Youtube.css";
import { FaCheckCircle } from "react-icons/fa";
function Youtube() {
  return (
    <div>
      <div id="box">
        <img
          id="image-youtube"
          src="https://s3-alpha-sig.figma.com/img/2909/031e/3307f64812ef70cd9d8e886864fad468?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ie8JIcdoaecK49Py-ZlNFOYR6jT2Fx-7xXzo21AIWfeTLx83b2h00bGyxjk6bngZl9TGjFieXYcXXxBAJffGpv~jHT-rJNgKoW68bJAgVp1J5y~1qpLaL57EMrFlO4NCwuZEIuseA6d1vuyy76MWin1q-7gOs3FZHERqhOm0WNygor8LRCfK9Lid2cLRqdqDeCYoP-1o77-STxIaenbXO~SwbWwoT9ow4F11Vvqynw7PliCbjlKVLdQuPhH2H8hhuVJfoPIMJPOLfizu-mDoy7UI3D369EPRqAC2AZCwe2UeRoi3n36huukyjcPjzAZlX3crTNWA4PKqW0MSVSd-1A__"
          alt="image"
        />
        <div id="Youtube-banner-content">
          <div id="BUY-SUP">
            <div id="buy-line">
              <h4>
                <span id="Buyer">Buyer</span>
              </h4>
            </div>

            <h4 id="Supplier">Supplier</h4>
          </div>
          <div id="cont-1">
            <p>
              <span className="checkbox">
                <FaCheckCircle />
              </span>
              Post your requirements.
            </p>

            <p>
              <span className="checkbox">
                <FaCheckCircle />
              </span>
              Sit back for multiple supliers to contact you.
            </p>
            <p>
              <span className="checkbox">
                <FaCheckCircle />
              </span>
              Choose among the suppliers based on the ratings and reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
