"use client";

import React from "react";

import { companies } from "@/data";

const Tech = () => {
  return (
    <section id="testimonials">

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-8 mb-8">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2 transform transition-transform duration-300 hover:scale-110 items-center">
              <img 
                src={company.img}
                alt={company.name}
                className="md:w-5 w-5"
              />
              <p className="text-white text-s">
                {company.name}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Tech;
