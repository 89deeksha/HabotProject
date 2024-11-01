import React from "react";
import "./Support.css";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { RiFileUserFill } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
function Support() {
  return (
    <div id="parent-div">
      <div id="child-div">
        <h2>How it works?</h2>
        <p>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div id="outer">
        <div id="row-1">
          <div id="custmr-2" className="custmr-1">
            <FaUserPlus />
            <p>Select Your Role and SignUp</p>
          </div>
          <div id="custmr-3" className="custmr-1">
            <HiOutlineClipboardDocumentCheck />
            <p>Buyers Post Your Requirements</p>
          </div>
          <div id="custmr-4" className="custmr-1">
            <HiOutlineDocumentMagnifyingGlass />
            <p> Review, Select, and Contact the Best Suppliers</p>
          </div>
        </div>
        <div id="row-2">
          <div id="custmr-5" className="custmr-1">
            <RiFileUserFill />
            <p>
              {" "}
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
          <div id="custmr-6" className="custmr-1">
            <MdEditDocument />
            <p>Contact to Buyers and Share your Quote for the service</p>
          </div>
          <div id="custmr-7" className="custmr-1">
            <FaHandshake />
            <p>
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
