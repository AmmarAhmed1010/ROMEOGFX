import React from "react";

const PricingPlans: React.FC = () => {
  const plans = [
    {
      img: "/img1.png",
      description: "Basic Thumbnail Design",
      price: "$50",
      buttonText: "Buy Now",
    },
    {
      img: "/img1.png",
      description: "Banner Design Package",
      price: "$100",
      buttonText: "Buy Now",
    },
    {
      img: "/img1.png",
      description: "Logo Design Package",
      price: "$120",
      buttonText: "Buy Now",
    },
    {
      img: "/img1.png",
      description: "Complete Design Package",
      price: "$250",
      buttonText: "Buy Now",
    },
  ];

  const whatsappLink = (description: string) => {
    const message = `I am interested in the following plan: ${description}.`;
    const phoneNumber = "+923158552233"; // Replace with your WhatsApp number
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-16">
      <div className="sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl heading">
          Our Pricing Plans
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border-2 border-blue-600 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Plan Image */}
              <img
                src={plan.img}
                alt={plan.description}
                className="w-full h-56 object-cover"
              />

              {/* Plan Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-blue-600 pb-2">
                  {plan.description}
                </h3>

                {/* Price & Button */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-2xl font-bold text-[#EFB048]">
                    {plan.price}
                  </p>
                  <a
                    href={whatsappLink(plan.description)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
