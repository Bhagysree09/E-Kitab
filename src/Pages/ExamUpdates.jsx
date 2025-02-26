import React from "react";

const examUpdates = [
  {
    id: 1,
    exam: "JEE Mains 2025",
    date: "March 15, 2025",
    description: "The registration process for JEE Mains 2025 has started. Apply before Feb 28, 2025."
  },
  {
    id: 2,
    exam: "NEET 2025",
    date: "May 5, 2025",
    description: "The official notification for NEET 2025 has been released. Check eligibility and syllabus."
  },
  {
    id: 3,
    exam: "UPSC Prelims 2025",
    date: "June 16, 2025",
    description: "UPSC Prelims 2025 application forms are now available. Last date to apply: April 10, 2025."
  }
];

const ExamUpdates = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Exam Updates</h2>
      <ul>
        {examUpdates.map((update) => (
          <li key={update.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">{update.exam}</h3>
            <p className="text-gray-600 text-sm">Exam Date: {update.date}</p>
            <p className="text-gray-700 mt-2">{update.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamUpdates;
