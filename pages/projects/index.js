'use client';

import '../../app/globals.css';
import 'tailwindcss/tailwind.css';
import ProjectsCard from "@/components/ProjectsCard";
import carshowHome from '../../images/carShow/carShowHomepage.png';
import projectFPRA from '../../images/projectFPRA/projectFPRA.jpeg';
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform } from "framer-motion";

export default function projects() {
  const { scrollYProgress } = useScroll();

  const parallaxBgY = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.9]);

  return (
    <div className="ml-2 font-bold text-xl">
      <Navbar />
      <motion.div className="parallax-container">
        <motion.div className="parallax-bg" style={{ y: parallaxBgY }} />
        <motion.div className="parallax-content" style={{ scale: contentScale }}>
          <div className="flex justify-center items-start h-1/4">
            <h1 className="font-inter text-2xl mt-24">Freshly Made</h1>
          </div>
          <ProjectsCard image={projectFPRA} link={'https://project-fpra.vercel.app/'} title={'Project FPRA'} desc={'This is a website built using NextJS which detects whether a review is fake or genuine, currently this website is under production'} />
        </motion.div>
      </motion.div>
      <motion.div className="parallax-container">
        <motion.div className="parallax-bg" style={{ y: parallaxBgY }} />
        <motion.div className="parallax-content" style={{ scale: contentScale }}>
          <div className="flex justify-center items-start h-1/4">
            <h1 className="font-inter text-2xl mt-10">More Cool Stuff</h1>
          </div>
          <ProjectsCard image={carshowHome} link={'https://car-showroom-psi.vercel.app/'} title={'Car Showroom'} desc={'This is a website built using ReactJS which is a prototype for a car dealership website, this website shows cars from different brands '} />
        </motion.div>
      </motion.div>
    </div>
  );
}
