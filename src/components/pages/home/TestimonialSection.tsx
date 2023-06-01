import TestimonialComponent from "@/components/common/Testimonial";
import { useState } from "react";

const testimonials = [
  {
    name: "Larry Diamond",
    position: "Chief Executive Officer",
    comment:
      "Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!",
    profileImage: "/testimonials/testimonial-01/image-01.jpg",
  },
  {
    name: "Emily Adams",
    position: "Marketing Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur erat at ipsum tincidunt, sit amet blandit nisi efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    profileImage: "/testimonials/testimonial-01/image-01.jpg",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    comment:
      "Fusce vel iaculis tellus, at placerat leo. Duis et mi eu lectus lobortis eleifend. Donec sollicitudin ante ac risus auctor, sed iaculis enim efficitur.",
    profileImage: "/testimonials/testimonial-01/image-01.jpg",
  },
];

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <section className="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
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

      <div className="container mx-auto">
        <div>
          <div className="relative flex justify-center">
            <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
              <div
                className="flex-no-wrap snap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all xs:max-w-[368px] sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[850px]"
                x-ref="carousel"
              >
                {testimonials.map((testimonial, index) =>
                  index === activeSlide - 1 ? (
                    <TestimonialComponent
                      key={index}
                      comment={testimonial.comment}
                      name={testimonial.name}
                      profileImage={testimonial.profileImage}
                      position={testimonial.position}
                    />
                  ) : null
                )}
              </div>
              <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center lg:pl-[120px] 2xl:pl-0">
                <button
                  className="mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-input transition-all hover:bg-primary hover:text-white"
                  onClick={() => {
                    if (activeSlide === 1) {
                      setActiveSlide(testimonials.length);
                    } else {
                      setActiveSlide(activeSlide - 1);
                    }
                  }}
                >
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    className="fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                    />
                  </svg>
                </button>
                <button
                  className="mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-input transition-all hover:bg-primary hover:text-white"
                  onClick={() => {
                    if (activeSlide === testimonials.length) {
                      setActiveSlide(1);
                    } else {
                      setActiveSlide(activeSlide + 1);
                    }
                  }}
                >
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    className="fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
