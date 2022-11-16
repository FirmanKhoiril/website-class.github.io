import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <div className="">
      <h2 className="head-text">
        <span className=" bg-gradient-to-b  from-red-800 border-b-2 font-mono border-b-slate-700 dark:border-b-slate-400 uppercase to-slate-400 dark:to-slate-100 bg-clip-text tracking-wider text-transparent"> Behind The Scene</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8 ">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "tween", delayChildren: 1.25 }}
            className=" w-[190px] flex  cursor-pointer justify-start items-start flex-col lg:w-[390px] my-6 mx-12"
            key={abouts.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="error" className="w-full h-52 rounded-2xl object-cover lg:h-72" />
            <h2 className="bold-text text-slate-800 dark:text-white" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text text-slate-500 dark:text-slate-200" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "bg-white dark:bg-slate-800");
