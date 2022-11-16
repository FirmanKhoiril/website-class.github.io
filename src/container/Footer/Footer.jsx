import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text text-slate-700 dark:text-slate-100">Message for This Class on Form below</h2>

      <div className="w-[60%] sm:w-full flex justify-evenly items-center flex-wrap my-8 ml-8 mr-16">
        <div className="min-w-[290px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-[10px] cursor-pointer hover:bg-slate-400 bg-slate-500 item ">
          <img src={images.email} className="w-10 h-10 my-0 mx-3" alt="email" />
          <a href="mailto:firmankhoiril13@gmail.com" className="p-text no-underline text-slate-800 dark:text-white font-[500]">
            firmankhoiril13@gmail.com
          </a>
        </div>
        <div className="min-w-[290px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-[10px] cursor-pointer hover:bg-slate-500 bg-slate-400 item">
          <img src={images.mobile} className="w-10 h-10 my-0 mx-3" alt="nobile" />
          <a href="tel : +62 852-9050-2392" className="p-text text-slate-800 dark:text-white no-underline font-[500]">
            +62 852-9050-2392
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="w-[90%]  flex-col my-4 mx-8 app__flex sm:w-full md:my-4 md:mx:0">
          <div className="item app__flex w-full my-3 mx-0 rounded-[10px] cursor-pointer bg-sky-400">
            <input
              type="text"
              title="Please Fiil Form "
              className="p-text w-full p-4 rounded-[10px] focus:dark:border-blue-500 border-2 focus:border-gray-500 bg-gray-200 shadow-md dark:bg-slate-100 text-sky-400 font-mono outline-none"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className=" item app__flex w-full my-3 mx-0 rounded-[10px] cursor-pointer">
            <input
              type="email"
              className="border-2 rounded-[7px] focus:dark:border-blue-500 focus:border-gray-500 p-text w-full p-4 font-semibold bg-gray-200dark:bg-slate-100 text-sky-500 dark:text-sky-600 font-sans shadow-md outline-none"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="item w-full my-3 mx-0 rounded-[10px] cursor-pointer">
            <textarea
              name="message"
              className="p-text w-full h-[140px] border-2 focus:dark:border-blue-500 focus:border-gray-500 p-4  rounded-[7px] bg-gray-200 shadow-md dark:bg-slate-50 text-sm text-sky-500 font-serif outline-none"
              placeholder="Your Message"
              onChange={handleChangeInput}
              value={message}
            ></textarea>
          </div>
          <button
            type="button"
            className="p-text py-4 px-8 border-none bg-slate-800 hover:bg-slate-900 shadow-xl shadow-slate-800/95 rounded-[10px] text-sky-400 font-[400] outline-none mt-4 font-mono cursor-pointer "
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text text-slate-700 dark:text-sky-200">Thanks for the Message, I will Read your Message!🥰</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "bg-slate-300 dark:bg-slate-600");
