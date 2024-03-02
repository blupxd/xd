import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup, faPencil } from "@fortawesome/free-solid-svg-icons";

const Offers = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isInView2) {
      mainControls2.start("visible");
    }
  }, [isInView, isInView2]);

  return (
    <div id="offer" className="flex flex-col">
      <div className="bg-pink-700 sticky top-0 flex z-1 items-center justify-center text-white h-96">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          ref={ref}
        >
          <h2 className="text-6xl text-center font-bold mb-4">What do I offer?</h2>
        </motion.div>
      </div>
      <div
        className="bg-gray-950 py-24 sticky top-0 flex z-5 items-center justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls2}
          transition={{ duration: 0.7, delay: 0.25 }}
          ref={ref2}
          className="grid grid-cols-1 md:grid-cols-2 p-4 gap-y-24 lg:grid-cols-2 gap-x-48 text-center text-white"
        >
          {offerCard("ReactJS", faReact, "I'm offering to build you an astonishing website with ReactJS. I have 2+ years of experience with ReactJS.")}
          {offerCard("NodeJS", faNodeJs, "Will provide, if needed, a server for your website. I have 2+ years of experience with NodeJS.")}
          {offerCard("UI/UX Design", faPencil, "Great websites come with great designs. I have been in UI/UX for 3+ years.")}
          {offerCard("Branding", faPeopleGroup, "The first thing that is noticed for your company is your branding. I have 4+ years of experience in logo design.")}
        </motion.div>
      </div>
    </div>
  );
};

const offerCard = (title, icon, description) => (
  <div className="p-4 flex flex-col items-center justify-center">
    <h1 className="text-3xl text-amber-300 font-bold mb-2">{title}</h1>
    <FontAwesomeIcon
      className="text-6xl text-amber-300 font-bold mb-2"
      icon={icon}
      whileHover={{ scale: 1.1 }}
    />
    <p className="text-sm md:text-base lg:text-base w-4/5 md:w-48">{description}</p>
  </div>
);

export default Offers;
