import React from "react";
import Image from "next/image";

export default function ProjectsCard(props) {
  return (
    <>
      <div className="grid xl:-mb-16">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-center items-start h-1/4">
            <Image src={props.image} className="rounded-3xl cover mt-10 h-44 w-72 ml-0.5 mr-1.5 xl:mt-6 xl:mb-20" />
          </div>
        </a>
        <div className="text-left xl:ml-28">
          <div className="flex justify-center items-start h-1/4">
            <h1 className="font-inter xl:-mt-72 mt-2 xl:ml-96 font-bold">{props.title}</h1>
          </div>
        </div>
        <div className="xl:ml-28 ml-2 mr-3">
          <div className="flex mt-1 items-start h-1/4">
            <p className="font-medium flex-wrap text-lg xl:ml-96 xl:mr-20 xl:-mt-64" style={{ maxWidth: "40em", wordWrap: "break-word", textAlign: "justify" }}>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
