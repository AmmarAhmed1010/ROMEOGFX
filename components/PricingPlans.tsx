import React from 'react';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      img: '/img1.png',
      description: 'Basic Thumbnail Design',
      price: '$50',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Banner Design Package',
      price: '$100',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'YouTube Overlay Design',
      price: '$80',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Logo Design Package',
      price: '$120',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Custom Thumbnail Design',
      price: '$70',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Social Media Package',
      price: '$150',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Web Banner Design',
      price: '$90',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Complete Design Package',
      price: '$250',
      buttonText: 'Buy Now',
    },
    {
      img: '/img1.png',
      description: 'Thumbnail & Banner Combo',
      price: '$130',
      buttonText: 'Buy Now',
    },
  ];

  const whatsappLink = (description: string) => {
    const message = `I am interested in the following plan: ${description}.`;
    const phoneNumber = '+923158552233'; // Replace with your WhatsApp number
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-16">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-[#EFB048] font-serif italic text-center mb-8">
          Our Pricing Plans
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border-2 border-blue-600 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Plan Image */}
              <img
                src={plan.img}
                alt={plan.description}
                className="w-full h-64 object-cover"
              />

              {/* Plan Content */}
              <div className="p-6">
                {/* Title and Line */}
                <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-blue-600 pb-2">
                  {plan.description}
                </h3>

                {/* Description */}
                <p className="text-lg text-white mb-4">{plan.description}</p>

                {/* Price & Buy Button */}
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-white">{plan.price}</p>

                  <a
                    href={whatsappLink(plan.description)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
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
