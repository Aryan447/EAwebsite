'use client';

import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from '.././images/captures/img1.jpg'
import img2 from '.././images/captures/img2.jpg'
import img3 from '.././images/captures/img3.jpg'
import img4 from '.././images/captures/img4.jpg'
import img5 from '.././images/captures/img5.jpg'
import img6 from '.././images/captures/img6.jpg'
import img7 from '.././images/captures/img7.jpg'
import img8 from '.././images/captures/img8.jpg'

export default function Intro() {
  const { scrollYProgress } = useScroll();

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const chasingTextOpacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  const leftTextX = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Move left
  const rightTextX = useTransform(scrollYProgress, [0, 0.5], [0, 100]); // Move right

  const leftImageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]); // Move left
  const rightImageX = useTransform(scrollYProgress, [0, 0.5], [100, 0]); // Move right

  const linkMotionProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  };
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
  };


  return (
    <>
      <head>
        <title>Aryan&apos;s Portfolio</title>
      </head>
      <div className="mt-56 -ml-4 font-extrabold text-4xl">
        <motion.div className="font-extrabold text-4xl" variants={containerVariants} initial="hidden" animate="visible">
          <div className="parallax-container">
            <motion.div className="parallax-content" style={{ opacity: textOpacity }}>
              <div className="flex">
                <motion.h1 className="large-screen font-inter invisible lg:visible -mr-60" style={{ x: leftTextX }}>
                  Hey There, I&apos;m
                </motion.h1>

                <div className="grid">
                  <motion.h1 className="font-inter lg:invisible -ml-1" style={{ x: leftTextX }}>
                    Hey There
                  </motion.h1>
                  <motion.h1 className="font-inter lg:invisible -ml-1" style={{ x: leftTextX }}>
                    I&apos;m
                  </motion.h1>
                </div>
                <motion.h1 className="gradient mt-10 -ml-28 lg:ml-20 lg:mt-0 gradient-text font-inter" style={{ x: leftTextX }}>
                  ARYAN
                </motion.h1>
              </div>
              <motion.h1 className="font-inter lg:-mt-8 ml-0.5" style={{ x: leftTextX }}>
                I Turn Coffee into Code
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="-mt-56 ml-4 font-inter font-extrabold text-4xl">
        <motion.h1 style={{ opacity: chasingTextOpacity }}>Chasing Light and Moments 📸✨</motion.h1>
      </div>
      <div className="lg:flex">
        <div className="mt-10 flex ml-3 gap-2 mr-3">
          <motion.div style={{ x: leftImageX, transition: { delay: 0.2 } }}>
            <Image src={img7} width={190} height={200} className="rounded-xl" />
          </motion.div>
          <motion.div style={{ x: rightImageX, transition: { delay: 0.2 } }}>
            <Image src={img2} width={190} height={200} className="rounded-xl" />
          </motion.div>

          {/* <Image src={img7} width={190} height={200} className="rounded-xl" /> */}
          {/* <Image src={img2} width={190} height={200} className="rounded-xl" /> */}
        </div>
        <div className="mt-10 flex ml-3 gap-2 mr-3">
          <motion.div style={{ x: leftImageX, transition: { delay: 0.4 } }}>
            <Image src={img3} width={190} height={200} className="rounded-xl" />
          </motion.div>
          <motion.div style={{ x: rightImageX, transition: { delay: 0.4 } }}>
            <Image src={img4} width={190} height={200} className="rounded-xl" />
          </motion.div>
          {/* <Image src={img3} width={190} height={200} className="rounded-xl" /> */}
          {/* <Image src={img4} width={190} height={200} className="rounded-xl" /> */}
        </div>
        <div className="mt-10 flex ml-3 gap-2 mr-3">
          <motion.div style={{ x: leftImageX, transition: { delay: 0.6 } }}>
            <Image src={img5} width={190} height={200} className="ml-2 rounded-xl" />
          </motion.div>
          <motion.div style={{ x: rightImageX, transition: { delay: 0.6 } }}>
            <Image src={img6} width={190} height={200} className="ml-6 rounded-xl" />
          </motion.div>
          {/* <Image src={img5} width={190} height={200} className="rounded-xl" /> */}
          {/* <Image src={img6} width={190} height={200} className="rounded-xl" /> */}
        </div>
      </div>
      <motion.button
        whileTap={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
      </motion.button>
    </>
  );
}
