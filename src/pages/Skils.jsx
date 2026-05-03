import React from "react";

function Skils() {
  const skills = {
    HTML5:
      "I write clean, semantic HTML5 markup following accessibility standards (WCAG), ensuring proper structure for SEO and screen readers.",
    "Tailwind CSS":
      "I design modern, responsive, and fast interfaces with Tailwind, focusing on flexibility and minimizing final CSS size.",
    JavaScript:
      "I use JavaScript daily to build interactive web applications, working with the DOM, Fetch API, and async/await fundamentals.",
    React:
      "I develop React apps using Hooks, Context API, and state management with Redux Toolkit. I have experience building reusable components.",
    "Node.js":
      "I build backend servers and REST APIs using Express, connecting to databases like MongoDB or PostgreSQL.",
    MongoDB:
      "I use MongoDB for flexible, schema-less data storage, writing aggregation pipelines, and integrating with Node.js applications using Mongoose.",
  };

  const skillsWithPercentages = {
    HTML5: { description: skills.HTML5, percentage: 85 },
    "Tailwind CSS": { description: skills["Tailwind CSS"], percentage: 80 },
    JavaScript: { description: skills.JavaScript, percentage: 80 },
    React: { description: skills.React, percentage: 75 },
    "Node.js": { description: skills["Node.js"], percentage: 70 },
    MongoDB: { description: skills.MongoDB, percentage: 70 },
  };
  const renderObject = (obj, indentLevel = 0) => {
    const indent = "  ".repeat(indentLevel);
    const entries = Object.entries(obj);

    return entries.map(([key, value], index) => {
      const isLast = index === entries.length - 1;
      const comma = isLast ? "" : ",";
      if (typeof value === "object" && value !== null) {
        return (
          <div key={key} className="ml-0">
            <span className="text-sky-400">
              {indent}"{key}"
            </span>
            <span className="text-white">: </span>
            <span className="text-white">{`{`}</span>
            <div className="ml-4">{renderObject(value, indentLevel + 1)}</div>
            <span className="text-white">
              {indent}
              {`}${comma}`}
            </span>
          </div>
        );
      } else {
        let formattedValue;
        if (typeof value === "string") {
          formattedValue = `"${value}"`;
        } else {
          formattedValue = value;
        }
        return (
          <div key={key}>
            <span className="text-sky-400">
              {indent}"{key}"
            </span>
            <span className="text-white">: </span>
            <span className="text-amber-500">{formattedValue}</span>
            <span className="text-white">{comma}</span>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-2">Top Skills</h2>
      <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap wrap-break-words overflow-visible">
        <span className="text-white">{`{`}</span>
        <div className="ml-4">{renderObject(skillsWithPercentages)}</div>
        <span className="text-white">{`}`}</span>
      </div>
    </div>
  );
}

export default Skils;
