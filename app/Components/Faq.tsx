"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { ScrollReveal } from "reveal-on-scroll-react";

function Faq() {
  const [activeQ, setActiveQ] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    if (activeQ === id) {
      setActiveQ(null);
    } else {
      setActiveQ(id);
    }
  };

  const questions = [
    {
      id: "q1",
      question: "1. What Ford models do you buy?",
      answer:
        "We buy any Ford, including EcoBoost models:  Ka, Focus, Kuga, Fiesta, CMax, Connect, EcoSport, Puma, BMax. We will pay top prices for just about any unwanted Ford. We buy all vehicles, whatever the age, mileage and condition.",
    },
    {
      id: "q2",
      question: "2. How can I get paid for my vehicle?",
      answer:
        "Getting paid for your scrap or unwanted vehicle is easy. Just call us anytime with your vehicle details and your location. We will quote you a great price on the spot, and agree a collection time that works for you. When we collect your vehicle, we will pay you the agreed price there and then AND complete all of the paperwork for you.",
    },
    {
      id: "q3",
      question: "3. What if I live outside of Essex, Hertfordshire or London?",
      answer:
        "If you live outside of these areas, we may still buy your vehicle from you AND collect it free of charge. Just give us a call, let us know where you’re located and we will do our best to help you.",
    },
    {
      id: "q4",
      question: "4. Do I need any paperwork?",
      answer:
        "We like to make things as quick, simple and efficient for you as possible. When we collect your vehicle, our friendly team will take care of all the paperwork for you. You get paid and leave the rest to us!",
    },
    {
      id: "q5",
      question: "5. What if my vehicle is too good to scrap?",
      answer:
        "If your vehicle is roadworthy, or you think it’s too good for scrapping, don’t worry, give Cars Wanted UK a call anyway. We will buy almost any vehicle in any condition.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-4 md:py-16" id="faq">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-5xl">
        <div className="flex flex-col text-[#010103]">
          <div className="flex flex-col mx-auto md:text-center leading-normal">
            <h2 className="mb-2 text-2xl lg:text-4xl font-bold text-gray-800">
              Frequently<span className="text-primary"> Asked </span>
              Questions
            </h2>
            <p className="text-base text-[#706f7b]">
              Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className="flex flex-col items-center mt-10 md:mt-20">
            {questions.map((q) => (
              <div
                key={q.id}
                className="flex flex-col text-[#010103] bg-white shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] w-full cursor-pointer mb-4"
              >
                <div
                  onClick={() => toggleQuestion(q.id)}
                  className={`flex justify-between px-4 items-center shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] py-7 transition-all duration-150 
                    ${activeQ === q.id ? "bg-primary text-white" : ""}`}
                >
                  <p className="text-lg font-medium">{q.question}</p>
                  <IconChevronDown className="text-[2rem]" />
                </div>
                <div
                  className={`text-base px-4 font-poppins text-gray-600 leading-[1.7] overflow-hidden transition-all duration-400 ease-in-out
                    ${activeQ === q.id ? "max-h-[20rem] py-11" : "max-h-0"}`}
                >
                  {q.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Google Map Section */}
          <div className="mt-10">
            <h2 className="mb-6 text-2xl lg:text-3xl font-bold text-gray-800">
              Our Location
            </h2>
            <div className="w-full h-64 md:h-96">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.238033074504!2d0.1927641157513479!3d51.55876747964659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b6c3d0b0c2f7%3A0x1e8c5b0d0b0c2f5e!2s16%20Hunter%20Dr%2C%20Hornchurch%20RM12%205TS%2C%20UK!5e0!3m2!1sen!2s!4v1639645213816!5m2!1sen!2s"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
