import React from 'react';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      img: '/path/to/image1.jpg',
      description: 'Basic Thumbnail Design',
      price: '$50',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image2.jpg',
      description: 'Banner Design Package',
      price: '$100',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image3.jpg',
      description: 'YouTube Overlay Design',
      price: '$80',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image4.jpg',
      description: 'Logo Design Package',
      price: '$120',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image5.jpg',
      description: 'Custom Thumbnail Design',
      price: '$70',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image6.jpg',
      description: 'Social Media Package',
      price: '$150',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image7.jpg',
      description: 'Web Banner Design',
      price: '$90',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image8.jpg',
      description: 'Complete Design Package',
      price: '$250',
      buttonText: 'Buy Now',
    },
    {
      img: '/path/to/image9.jpg',
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
    <section id='services' className="">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#EEAF48] mb-8">
          Our Pricing Plans
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Plan Image */}
              <img
                src={plan.img}
                alt={plan.description}
                className="w-full h-48 object-cover"
              />

              {/* Plan Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {plan.description}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">{plan.price}</p>

                {/* Buy Now Button */}
                <a
                  href={whatsappLink(plan.description)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition text-center block"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
