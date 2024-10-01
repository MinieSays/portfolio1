"use client";
import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_42ic5hi",
        "template_a3q4i04",
        form.current,
        "7wxX0U7TD5w60Xlp_"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message successfully sent!");
        },
        (error) => {
          console.log("Message failed:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 p-6 backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <p className="text-center text-2xl font-semibold mb-6">
            Send me a <span className="text-blue-600">Message!</span>
          </p>
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-white-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white-200">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-500  focus:border-transparent"
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white-200">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-500  focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white-200">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-500  focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <MagicButton
                title="Send Message"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </div>
        </form>

        <div className="flex flex-col items-center md:w-1/2 justify-center">
          <h1 className="heading text-center lg:max-w-[45vw]">
            Let Me Be Your Next{" "}
            <span className="text-blue-500">Software Engineer.</span>
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            I&apos;m open to discussing new opportunities.
          </p>
          <a href="mailto:minie@miniesayadeth.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <div className="flex mt-16 md:flex-row flex-col justify-center items-center w-full">
            <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0 justify-center">
              {socialMedia.map((info) => (
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <a href={info.link} target="_blank">
                    <img
                      loading="lazy"
                      src={info.img}
                      alt="icons"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
