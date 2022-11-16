import React from "react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { motion } from "framer-motion";

const handleDark = () => {
  const darkToggle = document.getElementById("dark-toggle");
  const html = document.querySelector("html");
  darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  });
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
};
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className="w-full flex items-center backdrop-blur-sm bg-slate-200 justify-between p-[13px] bg-transparent border-b-[1px] shadow-lg dark:shadow-black dark:shadow-none border-gray-200 fixed dark:border-b-2 dark:border-gray-900 dark:bg-slate-900 z-[2]">
      <div className="flex justify-start cursor-pointer items-center">
        <img src={images.logo} alt="logo" className=" w-[45px] h-[40px] rounded-[49%] " />
        <p className="p-2 ml-2 mr-2 bg-gradient-to-r  from-teal-400 to-blue-400  dark:from-blue-500 dark:to-teal-300 bg-clip-text text-transparent tracking-[0.07rem] font-bold dark:font-semibold">
          <a href="/">Multimedia A</a>
        </p>
      </div>

      <ul className="flex-1 justify-center items-center list-none hidden lg:flex">
        {["home", "about", "gallery", "testimonial", "contact"].map((item) => (
          <li className="pointer flex-col border-b-sky-500 hover:border-b-[1px] dark:hover:border-b-[1px] tracking-wider text-white" key={`link-${item}`}>
            <div className="w-full " />
            <a href={`#${item}`} className="uppercase bg-slate-700 dark:bg-slate-200 bg-gradient-to-r hover:from-blue-400 hover:to-teal-300 bg-clip-text p-4 m-1 text-[0.9rem]  font-semibold text-transparent">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex md:mr-0 ml-8">
        <input type="checkbox" className=" hidden" id="dark-toggle" onClick={handleDark} />
        <label htmlFor="dark-toggle">
          <div className="flex h-5 w-12 p-1 cursor-pointer items-center rounded-full bg-slate-800 dark:bg-slate-600 ">
            <BsSun className="mr-2 text-lg text-slate-50" />
            <div className="toggle-circle absolute h-5 w-5 rounded-[50%] bg-white transition duration-300 ease-in-out"></div>
            <MdOutlineDarkMode className="text-slate-50 text-lg ml-2" />
          </div>
        </label>
      </div>

      <div className="w-9 h-9 relative rounded-[50%]  flex justify-center items-center lg:hidden dark:bg-slate-700 bg-slate-300">
        <HiMenuAlt4 className="text-sky-500" onClick={() => setToogle(true)} />

        {toogle && (
          <motion.div className="image w-[80%] bg-slate-200 dark:bg-slate-900  h-screen top-0 right-0 p-4 fixed z-10 flex justify-end items-end flex-col" whileInView={{ x: [300, 0] }} transition={{ duration: 0.9, ease: "easeOut" }}>
            <HiX className="text-sky-400  w-9 h-9 m-4" onClick={() => setToogle(false)} />
            <div className="justify-center items-center flex ">
              <GiMagnifyingGlass className="text-slate-700 dark:text-slate-200 w-8 h-8 mr-2" />
              <h1 className=" text-sky-500 pr-[100px] text-center tracking-widest font-semibold text-lg dark:text-sky-300">Navigation</h1>
            </div>
            <ul className="list-none m-0 p-0 h-[100%] w-[100%] flex justify-start border-b-2  border-sky-500   items-start flex-col">
              {["home", "gallery", "about", "testimonial", "contact"].map((item) => (
                <li key={item} className="m-[1.25rem] hover:scale-105">
                  <a className="uppercase bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text p-4 font-semibold  text-[0.9rem] text-transparent   hover:border-b-2 border-b-sky-500" href={`#${item}`} onClick={() => setToogle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
