import React from "react";

const newsData = [
  {
    id: 1,
    title: "SSC CGL 2025 Notification Released",
    description: "The official notification for SSC CGL 2025 has been released. Check the latest syllabus, eligibility, and exam dates.",
    date: "February 11, 2025",
  },
  {
    id: 2,
    title: "UPSC Prelims Exam Strategy Guide",
    description: "A detailed guide on how to prepare for the UPSC Prelims exam with important topics and resources.",
    date: "February 10, 2025",
  },
  {
    id: 3,
    title: "IBPS PO Mains Result Declared",
    description: "IBPS PO Mains results are out. Candidates can check their results on the official website.",
    date: "February 9, 2025",
  },
];

const News = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Daily News & Updates</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">{news.title}</h3>
            <p className="text-gray-600 mt-2">{news.description}</p>
            <p className="text-sm text-gray-500 mt-3">{news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
