import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          A look at my academic background and the institutions that shaped my
          learning journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-600 h-full z-0"></div>

        {/* Education Items */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center mb-20 ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 mt-12 sm:mt-0 bg-gray-900/80 border border-gray-700 backdrop-blur-md rounded-xl shadow-md transition hover:shadow-lg ${
                  isLeft ? "sm:ml-16" : "sm:mr-16"
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-700 bg-white">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* School Info */}
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Grade & Description */}
                <p className="text-gray-300 text-sm mb-2">
                  <span className="font-medium text-white">Grade:</span>{" "}
                  {edu.grade}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
