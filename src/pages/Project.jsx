import React from "react";
import fProject from "../assets/Screenshot 2025-07-23 181242.png";
import fCV from "../assets/Screenshot 2026-05-03 163658.png";
import ChatApp from "../assets/Screenshot 2026-05-03 170702.png";
import spotify from "../assets/Screenshot 2026-05-03 172505.png";
import city_event from "../assets/screencapture-omar43007-github-io-City-events-2026-05-03-17_34_35.png";
import University_event from "../assets/screencapture-university-events-42web-io-index-php-2026-05-03-17_42_30.png";

function Project() {
  const stories = [
    {
      title: "AI-Powered CV Generator",
      description: `Developed a full-stack platform that generates ATS optimized, professional resumes using AI, with real-time scoring and PDF export.
 Tech: React, Node.js, Express, MongoDB, Tailwind CSS`,
      with: "Built by our tema",
      image: fCV,
      Url: "https://github.com/omar43007/CV-generator.git",
    },
    {
      title: "Smart Food Distribution System",
      description: `Designed an AI driven platform to track and distribute food donations efficiently, prioritizing families based on real-time needs.
          Delivered core features (inventory management, donor/recipient portals, AI allocation) in 24 hours during a hackathon
          \nTech: MERN Stack, JWT, AI algorithms, Socket.io,`,
      with: "Built by our tema",
      image: fProject,
      Url: "https://github.com/omar43007/FairShare.git",
    },
    {
      title: "Real-Time Chat Application",
      description: `Built a scalable messaging app using Socket.io for instant communication, with a responsive UI.
                     Tech: React, Node.js, Express, MongoDB, Socket.io`,
      with: "Built by our tema",
      image: ChatApp,
      Url: "https://github.com/omar43007/Chat-App.git",
    },
    {
      title: "Spotify Listening History Musicify",
      description: `Designed a dynamic dashboard for tracking user listening habits, with data visualization and real-time insights.
 Tech: React, Tailwind CSS`,
      with: "Built by our Omar",
      image: spotify,
      Url: "https://github.com/omar43007/spotify.git",
    },
    {
      title: "city events",
      description: `Developed an interactive city events directory website with team member profiles and responsive layout.
Tech: HTML, CSS, JavaScript + GitHub Pages hosting`,
      with: "Built by our Omar",
      image: city_event,
      Url: "https://omar43007.github.io/City-events/",
    },
    {
      title: "University events",
      description: `Developed an interactive University events directory website with team member profiles and responsive layout.
Tech: HTML, CSS, JavaScript + GitHub Pages hosting ,php ,DB:MySQL`,
      with: "Built by our Omar",
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
      {/* Header */}
      <div className="mb-6 border-b border-purple-800/30 pb-3">
        <h2 className="text-white text-3xl font-bold tracking-wide">My Work</h2>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4 lg:px-10">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-xs mx-auto bg-linear-to-b from-violet-500 to-violet-700 rounded-2xl overflow-visible shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image with diagonal clip on top-right corner */}
            <div className="relative h-40 rounded-t-2xl overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circle button — fills the clipped corner */}
            <div
              className="absolute top-0 right-0 z-10 flex items-center justify-center bg-violet-600 rounded-full shadow-lg cursor-pointer hover:bg-purple-500 transition-all duration-200 hover:scale-110"
              style={{
                width: "62px",
                height: "62px",
                transform: "translate(28%, -28%)",
              }}
              onClick={() => handleOpenUrl(story.Url)}
              role="button"
              tabIndex={0}
              aria-label="Open project link"
            >
              <span className="text-white text-2xl">↗</span>
            </div>

            {/* Card content */}
            <div className="p-4 text-white">
              <h3 className="font-bold text-lg mb-2 line-clamp-1">
                {story.title}
              </h3>
              <p className="text-sm text-purple-100 mb-3 line-clamp-3">
                {story.description}
              </p>
              <span className="text-xs text-purple-200 font-medium">
                {story.with}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
