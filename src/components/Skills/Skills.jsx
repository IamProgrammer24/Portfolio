// // src/components/Skills/Skills.jsx
// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-20 px-6 md:px-16 lg:px-24 font-sans bg-gradient-to-br from-[#0e0e1a] to-[#1b1b2b] text-white"
//   >
//     {/* Section Header */}
//     <div className="text-center mb-14">
//       <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase">
//         Skills
//       </h2>
//       <div className="w-14 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
//       <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
//         Tools and technologies I’ve used across various projects and roles.
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//       {SkillsInfo.map((category) => (
//         <Tilt
//           key={category.title}
//           tiltMaxAngleX={6}
//           tiltMaxAngleY={6}
//           scale={1.01}
//           transitionSpeed={600}
//           gyroscope={true}
//         >
//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-[#8245ec]/20 transition-all">
//             <h3 className="text-lg font-medium text-center text-gray-300 mb-5 uppercase tracking-wide">
//               {category.title}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex flex-col items-center justify-center p-3 bg-white/10 border border-white/10 rounded-lg hover:scale-105 transition-transform"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={skill.name}
//                     className="w-6 h-6 mb-1 object-contain"
//                   />
//                   <span className="text-xs text-gray-200 text-center">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Tilt>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;


// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Header */}
   <div className="text-center mb-14">
  <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase text-white">
    Skills
  </h2>
  <div className="w-14 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
  <p className="text-gray-200 mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
    Tools and technologies I’ve used across various projects and roles.
  </p>
</div>


    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          scale={1.01}
          transitionSpeed={600}
          gyroscope={true}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-[#8245ec]/20 transition-all">
            <h3 className="text-lg font-medium text-center text-gray-300 mb-5 uppercase tracking-wide">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-3 bg-white/10 border border-white/10 rounded-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 mb-1 object-contain"
                  />
                  <span className="text-xs text-gray-200 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
