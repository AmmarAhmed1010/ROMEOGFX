import React from "react";

const Pricing: React.FC = () => {
  const packages = [
    {
      title: "Basic",
      price: "Rs: 1999",
      description: "Perfect for simple designs.",
      features: [
        "2 HD Thumbnails",
        "1 Logo",
        "1 Banner Design",
        "1 Non Animated Overlay",
      ],
      message: "Hi, I am interested in the Basic Design Package for Rs: 1999.",
    },
    {
      title: "Standard",
      price: "Rs: 2999",
      description: "Ideal for growing creators.",
      features: [
        "2 HD Thumbnails",
        "1 Logo",
        "1 Banner Design",
        "1 Animated Overlay",
      ],
      message: "Hi, I am interested in the Standard Design Package for Rs: 2999.",
    },
    {
      title: "Premium",
      price: "Rs: 3599",
      description: "For professional creators.",
      features: [
        "4 HD Thumbnails",
        "1 Logo",
        "1 Banner Design",
        "1 Animated Overlay",
      ],
      message: "Hi, I am interested in the Premium Design Package for Rs: 3599.",
    },
  ];

  return (
    <section id="plans" className="py-16">
      <div className="mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl my-10 font-bold text-[#EFB048] font-serif italic mb-8">
          Design Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border-gradient-animation p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="content2">
              <h3 className="text-2xl font-bold text-blue-900">{pkg.title}</h3>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              <div className="text-4xl font-bold text-red-500 my-4">
                {pkg.price}
              </div>
              <ul className="text-left text-white space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/+923158552233?text=${encodeURIComponent(
                  pkg.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Buy Now
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
