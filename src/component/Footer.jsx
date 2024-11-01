import React from "react";
import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <div id="image-copyright">
        <img
          height={90}
          width={90}
          id="image-logo"
          src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVCWBXTsB5HAJspOV~0tqh6hIA5xvZjbjk3kSgRO8t7ChPrBUWmwXyMrwSHBZDVDxV8LjWKwWkihj0~PWyHkw~EnCnqh31iNGWS3LkOBDlWG0V4t9JH88j6BC~xyGdMcQiQpd1OApObe6N89ugLlx~8jZ0-8Fr~IKmYQBr5vm1yRujtOaBzuxAHKeG57x3IQUYFSoaNh8JymJgOaELN8VN2PNosiDPo-D51yBdzl-L64Gv~ZgJf-UnJ0gSoUJ5L1yrOiI3NpLBMLosdU0B73WVE0ngfqGiKQXnexGQMVIw~9bJ~N9DCOkZZyUi5d30Ev61A30n7BvpPF1BNrmqu0-Q__"
          alt="Logo"
        />
        <div>
          <h3 id="name">© R Singhania</h3>
        </div>
      </div>
      <div id="company">
        <h3 id="comp">Company</h3>
        <h6>About</h6>
        <h6>FAQ</h6>
      </div>
      <div id="term">
        <h3>Terms</h3>
        <h6>Data Privacy</h6>
        <h6>Terms</h6>
        <h6>Accessibility</h6>
      </div>
      <div id="related">
        <h3>Related</h3>
        <h6>Find Buyer</h6>
        <h6>Feedback</h6>
      </div>
      <div id="icons">
        <CiLinkedin />
        <SlSocialTwitter />
        <CiFacebook />
        <FaInstagram />
      </div>
    </div>
  );
}

export default Footer;
