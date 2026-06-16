import React from "react";
import fProject from "../assets/Screenshot 2025-07-23 181242.png";
import fCV from "../assets/Screenshot 2026-05-03 163658.png";
import ChatApp from "../assets/Screenshot 2026-05-03 170702.png";
import spotify from "../assets/Screenshot 2026-05-03 172505.png";
import city_event from "../assets/screencapture-omar43007-github-io-City-events-2026-05-03-17_34_35.webp";
import University_event from "../assets/screencapture-university-events-42web-io-index-php-2026-05-03-17_42_30.jpg";

function Project() {
  const stories = [
    {
      title: "AI-Powered CV Generator",
      description: `Developed a full-stack platform that generates ATS optimized, professional resumes using AI, with real-time scoring and PDF export.
 Tech: React, Node.js, Express, MongoDB, Tailwind CSS`,
      with: "Built by our team",
      image: fCV,
      Url: "https://github.com/omar43007/CV-generator.git",
    },
    {
      title: "Smart Food Distribution System",
      description: `Designed an AI driven platform to track and distribute food donations efficiently, prioritizing families based on real-time needs.
          Delivered core features (inventory management, donor/recipient portals, AI allocation) in 24 hours during a hackathon
          \nTech: MERN Stack, JWT, AI algorithms, Socket.io,`,
      with: "Built by our team",
      image: fProject,
      Url: "https://github.com/omar43007/FairShare.git",
    },
    {
      title: "Real-Time Chat Application",
      description: `Built a scalable messaging app using Socket.io for instant communication, with a responsive UI.
                     Tech: React, Node.js, Express, MongoDB, Socket.io`,
      with: "Built by our team",
      image: ChatApp,
      Url: "https://github.com/omar43007/Chat-App.git",
    },
    {
      title: "Spotify Listening History Musicify",
      description: `Designed a dynamic dashboard for tracking user listening habits, with data visualization and real-time insights.
 Tech: React, Tailwind CSS`,
      with: "Built by Omar",
      image: spotify,
      Url: "https://github.com/omar43007/spotify.git",
    },
    {
      title: "city events",
      description: `Developed an interactive city events directory website with team member profiles and responsive layout.
Tech: HTML, CSS, JavaScript + GitHub Pages hosting`,
      with: "Built by Omar",
      image: city_event,
      Url: "https://omar43007.github.io/City-events/",
    },
    {
      title: "University events",
      description: `Developed an interactive University events directory website with team member profiles and responsive layout.
Tech: HTML, CSS, JavaScript + GitHub Pages hosting ,php ,DB:MySQL`,
      with: "Built by Omar",
      image: University_event,
      Url: "https://university-events.42web.io/index.php",
    },
  ];

  const handleOpenUrl = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div>
      <div className="mb-6 border-b border-purple-800/30 pb-3">
        <h2 className="text-white text-3xl font-bold tracking-wide">My Work</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4 lg:px-10">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-violet-500 to-violet-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            {/* صورة المشروع */}
            <div className="h-40 w-full overflow-hidden bg-gray-700">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* المحتوى */}
            <div className="p-5 flex-1 flex flex-col text-white">
              {/* الشارة (Tag) - تحل محل الـ with القديمة لكن بشكل أنيق */}
              <span className="inline-block bg-purple-800/40 text-purple-200 text-xs font-medium px-3 py-1 rounded-full mb-3 self-start backdrop-blur-sm border border-white/10">
                {story.with}
              </span>

              {/* العنوان */}
              <h3 className="text-xl font-semibold text-white mb-1 line-clamp-1">
                {story.title}
              </h3>

              {/* الوصف */}
              <p className="text-sm text-purple-100 mb-4 line-clamp-3 flex-1">
                {story.description}
              </p>

              {/* رابط المشروع */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenUrl(story.Url);
                }}
                className="font-semibold text-purple-200 hover:text-white inline-flex items-center gap-1 transition-all duration-200 group w-fit"
              >
                View case study
                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
