"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function Pricing() {
  // Data for pricing plans
  const plans = [
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
    <div className="my-10">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl heading">
        Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Loop through the plans data to generate cards */}
        {plans.map((plan, index) => (
          <BackgroundGradient key={index} className="rounded-[22px] p-6 sm:p-10 bg-black ">
            <p className="text-center font-bold text-2xl sm:text-3xl text-red-500 mt-4 mb-2">{plan.title}</p>
            <p className="text-center text-white mb-2">{plan.description}</p>
            <p className="text-center text-white font-bold text-xl">{plan.price}</p>
            <ul className="text-center text-sm text-white mt-2 mb-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="text-center">
              <a
                href={`https://wa.me/+923158552233?text=${encodeURIComponent(plan.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full pl-6 pr-4 py-2 text-white flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 transition-all"
              >
                <span className="font-bold text-xs sm:text-sm">Buy now</span>
                <span className="bg-gray-700 rounded-full text-[0.75rem] px-3 py-1 text-white">
                  {plan.price}
                </span>
              </a>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
