'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const linkMotionProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
  };

  return (
    <div className="flex space-x-5 font-extrabold font-inter w-screen">
      <motion.div className="font-extrabold text-4xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.button {...linkMotionProps} className='text-sm ml-3'>
          <Link href='/'>Home</Link>
        </motion.button>
      </motion.div>
      <motion.div className="font-extrabold text-4xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.button {...linkMotionProps} className='text-sm'>
          <Link href='#'>Plans</Link>
        </motion.button>
      </motion.div>
      <motion.div className="font-extrabold text-4xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.button {...linkMotionProps} className='text-sm'>
          <Link href='#'>Contact</Link>
        </motion.button>
      </motion.div>
      <motion.div className="font-extrabold text-4xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.button {...linkMotionProps} className='text-sm'>
          <Link href='#'>About</Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
