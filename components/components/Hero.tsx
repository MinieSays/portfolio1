import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Tech from "./Tech";

const Hero = () => {
  return (
    <div className="pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="gray" />
      </div>

      <div className="h-screen w-full dark:bg-blue-600 absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Turning Ideas Into Reality
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/minie-sayadeth-613928313/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-600 transition group relative"
            >
              <FaLinkedin size={25} />
              <span className="absolute bottom-[-1.5rem] w-max px-2 py-1 rounded-md text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                LinkedIn
              </span>
            </a>
            <a
              href="/MinieResume2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-600 transition group relative"
            >
              <HiDocumentText size={25} />
              <span className="absolute bottom-[-1.5rem] w-max px-2 py-1 rounded-md text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                Resume
              </span>
            </a>
            <a
              href="https://github.com/MinieSays"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-600 transition group relative"
            >
              <FaGithub size={25} />
              <span className="absolute bottom-[-1.5rem] w-max px-2 py-1 rounded-md text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>
          </div>

          <TextGenerateEffect
            words="Hi there! My name is Minie."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m a frontend developer from Canada.
          </p>

          <a href="#about" className="mb-20">
            <MagicButton
              title="Show my work"
              icon={<FaArrowDown />}
              position="right"
            />
          </a>
        <Tech />
        </div>
      </div>
    </div>
  );
};

export default Hero;
