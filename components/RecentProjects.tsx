"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-blue-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 gap-y-1 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[35rem] h-[28rem] flex items-center justify-center sm:w-[26rem] w-[85vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[26rem] w-[85vw] overflow-hidden h-[22vh] lg:h-[30vh] mb-8">
                <a
                  href={item.link}
                  target="_blank"
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-[-2rem]"
                  />
                </a>
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-sm line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg font-light text-xs line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-6 mb-4">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${4 * index + 1}px)`,
                      }}
                    >
                      <img src={icon} alt="tech icon" className="p-1" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 lg:text-base md:text-sm text-xs hover:underline"
                  >
                    Check Live Site
                  </a>
                  {item.github && (
                    <>
                      <span className="text-purple">|</span>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 lg:text-base md:text-sm text-xs hover:underline"
                      >
                        GitHub
                      </a>
                    </>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
