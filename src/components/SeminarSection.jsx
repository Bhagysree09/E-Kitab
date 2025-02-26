import React from "react";
import meeting from "../assets/group-people-working-out-business-plan-office.jpg"
const SeminarSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-28 py-12 bg-purple-100 mr-11">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Participate in Free SSC Preparation Seminars
        </h2>
        <p className="text-gray-600 mb-6">
          Not sure how to prepare for SSC exams? Join our free seminar where our
          expert counselors will guide you on effective study techniques,
          subject-wise strategies, and best resources. Gain insights and clear
          your doubts to ace the SSC exam with confidence.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Upcoming Free Seminars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((seminar) => (
            <div key={seminar} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="bg-purple-500 text-white px-3 py-1 rounded-md w-max mb-2">
                <span className="text-sm font-semibold">19 July, 22</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                SSC Exam Strategies
              </h4>
              <p className="text-gray-700 text-sm">Online, Time: 08:00pm</p>
              <button className="mt-4 bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Join Now
              </button>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600">
          All Seminars
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img
          src={meeting}
          alt="Seminar Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default SeminarSection;
