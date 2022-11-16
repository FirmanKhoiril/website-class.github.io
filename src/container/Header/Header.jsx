import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Header = () => {
  gsap.registerPlugin(TextPlugin);
  gsap.to(".lead", { duration: 6, delay: 1.1, text: "Personal Website Kelas 11 <br> Multimedia A" });
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    const query = '*[_type == "headers"]';

    client.fetch(query).then((data) => setHeaders(data));
  }, []);
  return (
    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="slider w-full h-full overflow-hidden">
      <motion.h1
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="lead text-2xl lg:text-3xl mt-2 lg:mb-2 sm:mb-4 lg:tracking-[0.75rem] tracking-[0.45rem] from-sky-400 to-blue-500 text-center bg-gradient-to-r dark:from-sky-500 uppercase dark:to-lime-500 bg-clip-text text-transparent"
      ></motion.h1>
      {headers.map((head, index) => (
        <div className="figure relative m-0 w-[500%] mb-12">
          <div className="flex float-left w-[20%] justify-center cursor-pointer lg:justify-start items-center  lg:flex-col" key={headers.title + index}>
            <img src={urlFor(head.imgUrl)} alt="turu" className="lg:w-1/2 w-full shadow-lg h-[280px] mt-8 rounded-lg" />
            <h1 className="head-text tracking-widest bg-gradient-to-b mt-4  from-red-700 to-slate-400 dark:to-white text-transparent bg-clip-text hidden lg:flex">{head.title}</h1>
            <p className="p-text dark:text-white text-slate-700 font-semibold tracking-wider hidden lg:flex ">{head.description}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-around flex-row  items-center mt-[320px] pb-10 lg:mt-[380px] mb-20">
        <div className="flex justify-around flex-col  m-auto md:mr-16  pt-4">
          <h4 className="bold-text dark:text-white text-[18px]">
            Kami adalah murid kesayangan Bu Alfa <span className="text-lg"> 🥰</span>{" "}
          </h4>
          <p className=" text-slate-600 dark:text-slate-400  pt-2">Kami Menyukai Pelajaran 2D3D💻 </p>
          <p className="text-slate-600 dark:text-white">
            Semoga Sukses Semua untuk Kelas 11 & 12 Multimedia A<span className="text-[25px]">🤲</span>
          </p>
        </div>
        <div className="hidden md:flex justify-start flex-col items-center  pt-4">
          <h4 className="bold-text text-slate-800 dark:text-white text-2xl">We are Mr.Yongki beloved Students</h4>
          <p className=" text-slate-600 dark:text-slate-300  pt-2">Kami Suka Pelajaran Matematika </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(MotionWrap(Header), "home", "bg-white dark:bg-slate-800");
