import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Navbar.css";
// import'./Banner.css'
// import'./Banner'

function Navbar() {
  return (
    <div id="page">
      <div id="nav">
        <div id="navlogo">
          <img
            src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVCWBXTsB5HAJspOV~0tqh6hIA5xvZjbjk3kSgRO8t7ChPrBUWmwXyMrwSHBZDVDxV8LjWKwWkihj0~PWyHkw~EnCnqh31iNGWS3LkOBDlWG0V4t9JH88j6BC~xyGdMcQiQpd1OApObe6N89ugLlx~8jZ0-8Fr~IKmYQBr5vm1yRujtOaBzuxAHKeG57x3IQUYFSoaNh8JymJgOaELN8VN2PNosiDPo-D51yBdzl-L64Gv~ZgJf-UnJ0gSoUJ5L1yrOiI3NpLBMLosdU0B73WVE0ngfqGiKQXnexGQMVIw~9bJ~N9DCOkZZyUi5d30Ev61A30n7BvpPF1BNrmqu0-Q__"
            alt="logo"
          />
        </div>
        <div id="nav-content">
          <p>Find Suppliers</p>
          <p>Find Service Tags</p>
          <RiArrowDropDownLine
            style={{
              fontSize: "2vw",
            }}
          />
          <button id="button">Login/SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
