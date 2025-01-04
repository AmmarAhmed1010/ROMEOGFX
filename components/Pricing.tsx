import React from 'react';

const Pricing: React.FC = () => {
  const packages = [
    {
      title: "Basic",
      price: "$50",
      description: "Perfect for simple designs.",
      features: [
        "2 YouTube Thumbnails",
        "1 Banner Design",
        "Delivery in 2 days",
        "1 Revision",
      ],
    },
    {
      title: "Standard",
      price: "$100",
      description: "Ideal for growing creators.",
      features: [
        "5 YouTube Thumbnails",
        "2 Banner Designs",
        "Delivery in 4 days",
        "3 Revisions",
        "Priority Support",
      ],
    },
    {
      title: "Premium",
      price: "$200",
      description: "For professional creators.",
      features: [
        "10 YouTube Thumbnails",
        "5 Banner Designs",
        "Delivery in 7 days",
        "Unlimited Revisions",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#EEAF48]  mb-8">Design Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-900">{pkg.title}</h3>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              <div className="text-4xl font-bold text-red-500 my-4">
                {pkg.price}
              </div>
              <ul className="text-left text-gray-700 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
