import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <div className="w-full flex-row">
          <div className="w-full  min-h-[180px] bg-slate-50 dark:bg-slate-700 md:w-full flex-col md:flex-row flex p-8 rounded-[15px] lg:m-h-[400px]  item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgUrl)} className="w-full h-full sm:h-[100px] sm:w-[100px]  lg:h-[150px] lg:w-[150px] rounded-[50%] object-cover" alt="testimonial" />
            <div className="flex-[1,1,auto] h-full py-0 px-4 text-left">
              <p className="p-text text-xl font-mono lg:text-3xl text-gray-700 dark:text-white">{testimonials[currentIndex].title}</p>
              <div>
                <h4 className="bold-text font-[600] text-slate-400">{testimonials[currentIndex].name}</h4>
                <h5 className="bold-text font-[400] text-slate-600 dark:text-slate-100">{testimonials[currentIndex].testimonial}</h5>
              </div>
            </div>
          </div>
          <div className="flex-row mt-2 app__flex">
            <div
              className="app__flex w-[50px] cursor-pointer h-[50px] bg-slate-700 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-white  rounded-[50%] m-4 item"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft className="text-slate-100 dark:text-white dark:hover:text-sky-500 w-5 h-5 hover:text-slate-800" />
            </div>
            <div
              className="app__flex w-[50px] cursor-pointer h-[50px] bg-slate-700 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-white  rounded-[50%] m-4 item"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight className="text-slate-100 dark:text-white dark:hover:text-sky-500 w-5 h-5 hover:text-slate-800" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Testimonial), "testimonial", "bg-slate-200 dark:bg-slate-800");
