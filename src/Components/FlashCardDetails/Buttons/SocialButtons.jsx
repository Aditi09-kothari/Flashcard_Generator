import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function SocialButtons() {
  // social buttons to handle the sharing of the link to the specific social media platform
  return (
    <div className={`mt-4 mx-1 flex justify-between`}>
      <div className="facebook shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
        <FacebookShareButton url={`${window.location.href}`}>
          <BsFacebook size={30} style={{ color: "#0165E1" }} />
        </FacebookShareButton>
      </div>
      <div className="linkedin shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
        <LinkedinShareButton url={`${window.location.href}`}>
          <BsLinkedin size={30} style={{ color: "#0077B5" }} />
        </LinkedinShareButton>
      </div>
      <div className="whatsapp shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
        <WhatsappShareButton url={`${window.location.href}`}>
          <FaWhatsappSquare size={30} style={{ color: "#25D366" }} />
        </WhatsappShareButton>
      </div>
      <div className="twitter shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10">
        <TwitterShareButton url={`${window.location.href}`}>
          <FaTwitterSquare size={30} style={{ color: "#1DA1F2" }} />
        </TwitterShareButton>
      </div>
      <div className="email shadow-inner shadow-slate-300 rounded-md p-1 h-10 w-10 text-black">
        <EmailShareButton url={`${window.location.href}`}>
          <MdEmail size={30} />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default SocialButtons;
