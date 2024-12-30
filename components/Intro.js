'use client';

import Head from "next/head";
import { ChevronsDown } from 'lucide-react';

export default function Intro() {
  return (
    <>
      <Head>
        <title>EA</title>
      </Head>

      <div className="relative h-screen">
        <div className="absolute inset-0 bg-intro-bg bg-cover bg-center blur-md" />

        <div className="relative z-10 h-full flex flex-col">
          <h1 className="text-white text-4xl font-bold ml-8 mt-40">
            Carlos Cario &apos s EA
          </h1>
          <h1 className="text-white font-bold ml-8 mt-2">
            Automate Your Trading, Maximise Your Profits
          </h1>
          <div className="flex items-center justify-center gap-2 mt-80">
            <h2 className="text-2xl">
              Scroll down to see more content
            </h2>
            <ChevronsDown size={32} className="animate-bounce" />
          </div>
        </div>
      </div>

      <div className="h-screen bg-white">
      </div>
    </>
  );
}