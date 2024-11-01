import React from "react";
import "./Habot.css";
function Habotlocations() {
  return (
    <div id="outerdiv">
      <div>
        <div id="text">
          <h1 id="text-1">
            Ready to dive into <span id="Blue-Habot">HABOT?</span>
          </h1>
          <p id="text-2">
            Signing up with opens a door to a world of new opportunities <br />
            and potential for business growth Gain acces to a vibrant community
            <br /> of like-minded individuals, unlock valuable resources and
            take the first <br /> step towards realizing your enterpreneurial
            dreams
          </p>
        </div>
        <button id="signup">Sign up Today!</button>
      </div>
      <div id="loc">
        <div id="loc-1">
          <button className="btn-1">Abu Dhabi</button>
          <button className="btn-1">Dubai</button>
        </div>
        <div id="loc-2">
          <button className="btn-1">Sharjah Ajman</button>
          <button className="btn-1">Fujairah</button>
        </div>
        <div id="loc-3">
          <button className="btn-1">Ras Al Khaimah</button>
          <button className="btn-1">Umm Al Quwain</button>
        </div>
      </div>
    </div>
  );
}

export default Habotlocations;
