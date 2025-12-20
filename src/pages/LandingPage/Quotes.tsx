import React, { useState, useEffect, useRef } from "react";
import img1 from "../../assets/QuoteImage.svg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.svg";

export default function QuoteSection() {
  const slides = [
    {
      image: img1,
      rating: 5,
      feedback:
        "Love the simplicity of the service and how easier it makes everything! We can’t imagine working without it.",
      name: "Renee Wells",
      role: "Product Designer",
      company: "Quotient",
    },
    {
      image: img2,
      rating: 4,
      feedback:
        "The customer support and overall ease of use is unmatched. Our workflow has never been smoother.",
      name: "Daniel Smith",
      role: "CTO",
      company: "TechNova",
    },
    {
      image: img3,
      rating: 3,
      feedback:
        "A truly transformative tool for our team. We’ve seen huge productivity gains since day one.",
      name: "Aisha Khan",
      role: "Operations Manager",
      company: "BrightPath",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate with pause support
  useEffect(() => {
    setAnimateText(true);
    if (!paused) {
      timerRef.current = setInterval(
        () => setIndex((prev) => (prev + 1) % slides.length),
        5000
      );
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, paused]);

  const current = slides[index];

  return (
    <section className="w-full bg-[#F5F7FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4">
        <div
          className="grid overflow-hidden rounded-[24px] border border-[#3F51B5] bg-white shadow-sm md:grid-cols-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Text Side */}
          <div
            className={`flex flex-col justify-center px-12 py-10 transform transition-all duration-700 ${
              animateText
                ? "translate-x-0 opacity-100"
                : "-translate-x-5 opacity-0"
            }`}
            onAnimationEnd={() => setAnimateText(false)}
          >
            <div className="text-center md:text-left">
              {/* Rating */}
              <div className="flex justify-center md:justify-start gap-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill={i < current.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth={i < current.rating ? 0 : 1.5}
                  >
                    <path d="M12 2.75l2.92 5.92 6.54.95-4.73 4.6 1.12 6.52L12 17.98 6.15 20.74l1.12-6.52-4.73-4.6 6.54-.95L12 2.75z" />
                  </svg>
                ))}
              </div>

              {/* Feedback */}
              <p className="mt-4 text-2xl font-semibold text-gray-900">
                {current.feedback}
              </p>
              <p className="mt-4 text-sm text-gray-500">
                —{" "}
                <span className="font-medium text-gray-900">
                  {current.name}
                </span>
                <br />
                {current.role}, {current.company}
              </p>
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center md:justify-start gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index
                      ? "bg-[#22C55E]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Side with Fade */}
          <div
            className="relative aspect-[4/3] w-full overflow-hidden testimonial-rounded"
            style={{ height: "464px" }}
          >
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt={slide.name}
                className={`absolute inset-0 h-full w-full object-cover testimonial-rounded transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
