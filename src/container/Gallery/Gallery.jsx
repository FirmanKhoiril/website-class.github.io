import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiLaugh } from "react-icons/bi";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Gallery.scss";

const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);
  const [filterGallery, setFilterGallery] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "gallerys"]';

    client.fetch(query).then((data) => {
      setGallerys(data);
      setFilterGallery(data);
    });
  }, []);

  const handleGalleryFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterGallery(gallerys);
      } else {
        setFilterGallery(gallerys.filter((gallery) => gallery.tags.includes(item)));
      }
    }, 800);
  };

  return (
    <>
      <h2 className="head-text bg-gradient-to-b  from-red-800  uppercase to-slate-600 dark:to-slate-100 bg-clip-text  text-transparent font-mono tracking-wider border-b-2 dark:border-b-slate-200 border-b-slate-600">Gallery Kami</h2>

      <div className="flex flex-row justify-start items-center flex-wrap mt-16 mx-0 mb-8">
        {["All", "We", "Boys", "Girls", "Teacher"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleGalleryFilter(item)}
            className={`item py-2 px-4 bg-slate-600 dark:bg-white text-slate-100 dark:text-black font-[800] cursor-pointer m-2 app__flex p-text hover:bg-sky-400 dark:hover:bg-sky-600 hover:text-slate-800 dark:hover:text-white lg:rounded-full lg:py-3 lg:px-4  ${
              activeFilter === item ? "bg-sky-500 text-white" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div className="flex-wrap justify-center items-center sm:w-full sm:m-4 flex" whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 1, delayChildren: 0.5 }} animate={animateCard}>
        {filterGallery.map((gallery, index) => (
          <div
            className="item w-[270px] lg:w-[470px] hover:scale-105 lg:p-5 lg:rounded-xl flex-col m-8 p-4 rounded-lg bg-slate-50 shadow-lg dark:shadow-black dark:bg-slate-700 text-black cursor-pointer app__flex hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]"
            key={index}
          >
            <div className="w-full h-[230px] lg:h-[350px] relative app__flex">
              <img className="w-full h-full rounded-lg " src={urlFor(gallery.imgUrl)} alt={gallery.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.5 }}
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-50 rounded-lg opacity-0 item  app__flex"
              >
                <a href={gallery.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex w-12 h-12 rounded-[50%] bg-black bg-opacity-50 text-white m-4 font-[--font-base] font-[800] cursor-pointer item"
                  >
                    <AiFillEye className="w-[50%] h-[50%] text-slate-300" />
                  </motion.div>
                </a>
                <a href={gallery.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex w-12 h-12 rounded-[50%] bg-black bg-opacity-50 text-white m-4 font-[--font-base] font-[800] cursor-pointer item"
                  >
                    <BiLaugh className="w-[50%] h-[50%] text-slate-300" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className=" p-2 w-full relative flex-col app__flex">
              <h4 className="bold-text text-slate-800 dark:text-slate-300 mt-4 leading-6">{gallery.title}</h4>
              <p className="p-text text-slate-600 dark:text-slate-400 mt-[10px]">{gallery.description}</p>

              <div className="absolute py-1 px-2 opacity-70 rounded-[10px] bg-slate-700 dark:bg-slate-800 top-[-25px] app__flex">
                <p className="p-text text-slate-100 dark:text-slate-50 uppercase tracking-wide">{gallery.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Gallery, "app__gallery"), "gallery", "bg-slate-200 dark:bg-slate-900");
