import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import image from "../assets/myImage.webp";

function Container_Home() {
  const fullName = "Omar AL-Ali";
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index <= fullName.length) {
        setDisplayedName(fullName.substring(0, index));
        setIndex(index + 1);
        setTypingSpeed(150);
      } else if (isDeleting && index > 0) {
        setDisplayedName(fullName.substring(0, index - 1));
        setIndex(index - 1);
        setTypingSpeed(100);
      } else if (!isDeleting && index > fullName.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setTimeout(() => {}, 500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, fullName, typingSpeed]);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("Omar ALAli_CV.pdf");
      const blob = await response.blob();
      saveAs(blob, "Omar_AL_Ali_CV.pdf");
    } catch (error) {
      console.error(error);
      alert("فشل التحميل");
    }
  };
  const handleOpenGitHub = () => {
    window.open("https://github.com/omar43007", "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between h-full">
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hi, I'm <span className="text-violet-800">{displayedName}</span>
          <span className="animate-pulse">|</span>
        </h1>
        <h2 className="text-3xl font-bold text-violet-700">
          Frontend Developer Specialist
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a passionate and motivated developer with a strong interest in
          full-stack web development. I completed an intensive five-month
          training program through Byte for Future, specializing in the MERN
          Stack (MongoDB, Express.js, React.js, Node.js).
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          During the program, I worked on multiple hands-on projects including a
          real-time chat application and an interactive CV generator, which
          helped me build solid skills in both front-end and back-end
          development.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-md text-white font-medium transition cursor-pointer"
          onClick={handleOpenGitHub}
        >
          View My Work
        </button>
        <button
          className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-md text-white font-medium transition ml-8 cursor-pointer"
          onClick={handleDownloadCV}
        >
          Download My CV
        </button>
      </div>

      {/* القسم الأيمن */}
      <div className="flex-1 flex justify-center items-center">
        <div
          className="w-100 h-100  rounded-full flex items-center justify-center shadow-2xl bg-cover "
          style={{ backgroundImage: `url(${image})`  }}
        >
          <span className="text-white text-6xl font-bold"></span>
        </div>
      </div>
    </div>
  );
}

export default Container_Home;
