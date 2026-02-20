import React, { useEffect } from "react";
import { useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
const financeTips = [
  {
    tip: "Pay yourself first by saving a fixed percentage before spending.",
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    author: "Warren Buffett",
  },
  {
    tip: "Focus on keeping and growing money, not just making it.",
    quote: "It’s not how much money you make, but how much money you keep.",
    author: "Robert Kiyosaki",
  },
  {
    tip: "Create a strict budget to control your cash flow.",
    quote:
      "A budget is telling your money where to go instead of wondering where it went.",
    author: "Dave Ramsey",
  },
  {
    tip: "Invest in your own skills and knowledge for the best ROI.",
    quote: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    tip: "Avoid speculating and stick to a long-term investment plan.",
    quote:
      "The individual investor should act consistently as an investor and not as a speculator.",
    author: "Benjamin Graham",
  },
  {
    tip: "Avoid buying unnecessary items to prevent future financial strain.",
    quote:
      "If you buy things you do not need, soon you will have to sell things you need.",
    author: "Warren Buffett",
  },
  {
    tip: "Use money as a tool to gain time and freedom.",
    quote: "Money is a terrible master but an excellent servant.",
    author: "P.T. Barnum",
  },
  {
    tip: "Never invest in a business or asset you don't understand.",
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    tip: "Small, consistent investments beat large, irregular ones.",
    quote: "The most powerful force in the universe is compound interest.",
    author: "Albert Einstein",
  },
  {
    tip: "Financial success is 80% behavior and only 20% head knowledge.",
    quote: "Wealth is the ability to fully experience life.",
    author: "Henry David Thoreau",
  },
];

export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financeTips[0]);
  const { tip, quote, author } = showQuote;

  useEffect(() => {
    setInterval(() => {
      setShowQuote(financeTips[Math.floor(Math.random() * financeTips.length)]);
    }, 5000);
  }, []);
  return (
    <div
      className="d-flex flex-column justify-content-center "
      style={{ height: "100%" }}
    >
      <div className="mb-5">
        <GiReceiveMoney
          className="text-success"
          style={{ fontSize: "10rem" }}
        />
        <div>Watch your money grow!</div>
      </div>
      <h4> {tip}</h4>

      <div className="fw-bolder">
        {quote}, - {author}
      </div>
    </div>
  );
};
