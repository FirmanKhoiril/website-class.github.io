import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social ">
      <div className="bg-rose-500">
        <a href="https://www.instagram.com/perwiramma/" rel="noreferrer" target="_blank">
          <BsInstagram className="text-white" />
        </a>
      </div>
      <div className="bg-blue-500">
        <a href="https://www.facebook.com/mySMKPerdana/" rel="noreferrer" target="_blank">
          <FaFacebookF className="text-white" />
        </a>
      </div>
      <div className="bg-blue-400">
        <a href="https://twitter.com/OfficialSkada" rel="noreferrer" target="_blank">
          <BsTwitter className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
