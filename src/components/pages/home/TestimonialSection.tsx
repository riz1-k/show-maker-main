/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from "react";

interface ITestimonial {
  name: string;
  position: string;
  quote: string;
}

const SingleTestimonidal: FC<ITestimonial> = ({ name, quote, position }) => (
  <div className="w-full  flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out transform ">
    <h1 className="text-xl text-gray-600 leading-relaxed text-center w-4/5">
      {quote}
    </h1>
    <div className="flex items-center gap-4">
      <div className="flex flex-col ">
        <label className="text-gray-600 text-xl font-semibold text-center font-poppins">
          - {name}
        </label>
        <label className="text-gray-600 text-center font-medium text-base">
          {position}
        </label>
      </div>
    </div>
  </div>
);

const testimonials: ITestimonial[] = [
  {
    name: "Bobby Kuruvilla",
    position: "Head of People and Culture",
    quote: `"SHOWMAKER event management is outstanding. They flawlessly executed
    our conference meet and team building activity, boosting employee
    morale to new heights. Their attention to detail and organizational
    skills were exceptional. Thanks to SHOWMAKER, our event was a
    resounding success, and our team is more united than ever. I strongly
    endorse their services for creating unforgettable experiences and
    fostering a remarkable enhancement in team spirit."`,
  },
  {
    name: "Suprita Kumari",
    position: "Head of Human Resource",
    quote: `SHOWMAKER event management is unparalleled. They made our event flawless and transformed my colleagues into a close-knit family. Their teamwork and attention to detail were incredible. Thanks to SHOWMAKER, our event was a resounding success, and the bonds we formed will endure. I highly recommend them for their professionalism and ability to create an unforgettable experience.`,
  },
  {
    name: "Noel D'souza",
    position: "Manager",
    quote: `I'm thrilled to share my experience with SHOWMAKER event management. They truly made our event unforgettable by incorporating the captivating theme of Avatar. Their attention to detail and creativity brought the essence of the movie to life. Not only did they flawlessly execute the event, but they also enhanced team bonding and morale. I strongly recommend SHOWMAKER for an unforgettable experience and a remarkable boost in team spirit.`,
  },

  {
    name: "Aditi Nayak",
    position: "DevOps Engineer",
    quote: `SHOWMAKER event management is incredible! Their Angry Birds-themed event for employees and their families was a huge hit. They created a fun and engaging experience that brought everyone together. Thank you SHOWMAKER for organizing an amazing event`,
  },
];

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <section
      id="testimonials"
      className="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] relative h-screen"
    >
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Testimonials
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              What Our Clients Say About Us
            </h2>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute z-50 bg-slate-300 rounded-full px-5 py-3.5 left-2  md:left-10 top-1/2 transform -translate-y-1/2 focus:outline-none transition-all"
        onClick={() => {
          if (activeSlide === 0) return setActiveSlide(testimonials.length - 1);
          setActiveSlide(activeSlide - 1);
        }}
      >
        {`<`}
      </button>
      {testimonials.map(
        (testimonial, index) =>
          index === activeSlide && (
            <SingleTestimonidal {...testimonial} key={index} />
          )
      )}
      <button
        className="absolute bg-slate-300 rounded-full px-5 py-3.5 right-2  md:right-10 top-1/2 transform -translate-y-1/2 focus:outline-none transition-all"
        onClick={() => {
          if (activeSlide === testimonials.length - 1) return setActiveSlide(0);
          setActiveSlide(activeSlide + 1);
        }}
      >
        {`>`}
      </button>
    </section>
  );
};

export default TestimonialSection;
