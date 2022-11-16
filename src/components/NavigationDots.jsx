import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation ">
      {["home", "gallery", "about", "testimonial", "contact"].map((item, index) => (
        <a key={item + index} href={`#${item}`} className=" app__navigation-dot bg-slate-600 dark:bg-slate-300" style={active === item ? { backgroundColor: "#47d961" } : {}} />
      ))}
    </div>
  );
};

export default NavigationDots;
