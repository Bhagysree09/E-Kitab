import React from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$49/month",
    features: ["Access to limited study materials", "Weekly practice tests", "Basic support"]
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$99/month",
    features: ["Access to all study materials", "Daily practice tests", "24/7 support", "Live doubt sessions"]
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$149/month",
    features: ["Personal mentor", "One-on-one live classes", "Advanced test series", "Exclusive study materials"]
  }
];

const PricingPlans = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">{plan.name}</h3>
            <p className="text-lg font-bold text-gray-800">{plan.price}</p>
            <ul className="mt-2 text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="list-disc list-inside">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
