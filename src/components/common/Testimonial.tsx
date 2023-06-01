import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  position: string;
  comment: string;
  profileImage: string;
}

const TestimonialComponent: React.FC<Props> = ({
  name,
  position,
  comment,
  profileImage,
}) => {
  return (
    <div className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]">
      <div className="w-full items-center md:flex">
        <div className="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
          <Image
            src={profileImage}
            alt="image"
            className="w-full"
            width={310}
            height={310}
          />
          <span className="absolute -top-6 -left-6 z-[-1] hidden sm:block">
            <svg
              width="77"
              height="77"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1.66343"
                cy="74.5221"
                r="1.66343"
                transform="rotate(-90 1.66343 74.5221)"
                fill="#3056D3"
              />
              <circle
                cx="1.66343"
                cy="30.94"
                r="1.66343"
                transform="rotate(-90 1.66343 30.94)"
                fill="#3056D3"
              />
              <circle
                cx="16.3016"
                cy="74.5221"
                r="1.66343"
                transform="rotate(-90 16.3016 74.5221)"
                fill="#3056D3"
              />
              <circle
                cx="16.3016"
                cy="30.94"
                r="1.66343"
                transform="rotate(-90 16.3016 30.94)"
                fill="#3056D3"
              />
              <circle
                cx="30.9398"
                cy="74.5221"
                r="1.66343"
                transform="rotate(-90 30.9398 74.5221)"
                fill="#3056D3"
              />
              <circle
                cx="30.9398"
                cy="30.94"
                r="1.66343"
                transform="rotate(-90 30.9398 30.94)"
                fill="#3056D3"
              />
              <circle
                cx="45.578"
                cy="74.5221"
                r="1.66343"
                transform="rotate(-90 45.578 74.5221)"
                fill="#3056D3"
              />
              <circle
                cx="45.578"
                cy="30.94"
                r="1.66343"
                transform="rotate(-90 45.578 30.94)"
                fill="#3056D3"
              />
              <circle
                cx="60.2162"
                cy="74.5216"
                r="1.66343"
                transform="rotate(-90 60.2162 74.5216)"
                fill="#3056D3"
              />
              <circle
                cx="74.6634"
                cy="74.5216"
                r="1.66343"
                transform="rotate(-90 74.6634 74.5216)"
                fill="#3056D3"
              />
              <circle
                cx="60.2162"
                cy="30.9398"
                r="1.66343"
                transform="rotate(-90 60.2162 30.9398)"
                fill="#3056D3"
              />
              <circle
                cx="74.6634"
                cy="30.9398"
                r="1.66343"
                transform="rotate(-90 74.6634 30.9398)"
                fill="#3056D3"
              />
              <circle
                cx="1.66343"
                cy="59.8839"
                r="1.66343"
                transform="rotate(-90 1.66343 59.8839)"
                fill="#3056D3"
              />
              <circle
                cx="1.66343"
                cy="16.3017"
                r="1.66343"
                transform="rotate(-90 1.66343 16.3017)"
                fill="#3056D3"
              />
              <circle
                cx="16.3016"
                cy="59.8839"
                r="1.66343"
                transform="rotate(-90 16.3016 59.8839)"
                fill="#3056D3"
              />
              <circle
                cx="16.3016"
                cy="16.3017"
                r="1.66343"
                transform="rotate(-90 16.3016 16.3017)"
                fill="#3056D3"
              />
              <circle
                cx="30.9398"
                cy="59.8839"
                r="1.66343"
                transform="rotate(-90 30.9398 59.8839)"
                fill="#3056D3"
              />
              <circle
                cx="30.9398"
                cy="16.3017"
                r="1.66343"
                transform="rotate(-90 30.9398 16.3017)"
                fill="#3056D3"
              />
              <circle
                cx="45.578"
                cy="59.8839"
                r="1.66343"
                transform="rotate(-90 45.578 59.8839)"
                fill="#3056D3"
              />
              <circle
                cx="45.578"
                cy="16.3017"
                r="1.66343"
                transform="rotate(-90 45.578 16.3017)"
                fill="#3056D3"
              />
              <circle
                cx="60.2162"
                cy="59.8839"
                r="1.66343"
                transform="rotate(-90 60.2162 59.8839)"
                fill="#3056D3"
              />
              <circle
                cx="74.6634"
                cy="59.8839"
                r="1.66343"
                transform="rotate(-90 74.6634 59.8839)"
                fill="#3056D3"
              />
              <circle
                cx="60.2162"
                cy="16.3017"
                r="1.66343"
                transform="rotate(-90 60.2162 16.3017)"
                fill="#3056D3"
              />
              <circle
                cx="74.6634"
                cy="16.3017"
                r="1.66343"
                transform="rotate(-90 74.6634 16.3017)"
                fill="#3056D3"
              />
              <circle
                cx="1.66343"
                cy="45.2455"
                r="1.66343"
                transform="rotate(-90 1.66343 45.2455)"
                fill="#3056D3"
              />
              <circle
                cx="1.66343"
                cy="1.66342"
                r="1.66343"
                transform="rotate(-90 1.66343 1.66342)"
                fill="#3056D3"
              />
              <circle
                cx="16.3016"
                cy="45.2455"
                r="1.66343"
                transform="rotate(-90 16.3016 45.2455)"
                fill="#3056D3"
              />
              <circle
                cx="16.3016"
                cy="1.66342"
                r="1.66343"
                transform="rotate(-90 16.3016 1.66342)"
                fill="#3056D3"
              />
              <circle
                cx="30.9398"
                cy="45.2455"
                r="1.66343"
                transform="rotate(-90 30.9398 45.2455)"
                fill="#3056D3"
              />
              <circle
                cx="30.9398"
                cy="1.66342"
                r="1.66343"
                transform="rotate(-90 30.9398 1.66342)"
                fill="#3056D3"
              />
              <circle
                cx="45.578"
                cy="45.2455"
                r="1.66343"
                transform="rotate(-90 45.578 45.2455)"
                fill="#3056D3"
              />
              <circle
                cx="45.578"
                cy="1.66344"
                r="1.66343"
                transform="rotate(-90 45.578 1.66344)"
                fill="#3056D3"
              />
              <circle
                cx="60.2162"
                cy="45.2458"
                r="1.66343"
                transform="rotate(-90 60.2162 45.2458)"
                fill="#3056D3"
              />
              <circle
                cx="74.6634"
                cy="45.2458"
                r="1.66343"
                transform="rotate(-90 74.6634 45.2458)"
                fill="#3056D3"
              />
              <circle
                cx="60.2162"
                cy="1.66371"
                r="1.66343"
                transform="rotate(-90 60.2162 1.66371)"
                fill="#3056D3"
              />
              <circle
                cx="74.6634"
                cy="1.66371"
                r="1.66343"
                transform="rotate(-90 74.6634 1.66371)"
                fill="#3056D3"
              />
            </svg>
          </span>
          <span className="absolute -bottom-6 -right-6 z-[-1]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                stroke="#13C296"
                stroke-width="6"
              />
            </svg>
          </span>
        </div>
        <div className="w-full">
          <div>
            <p className="mb-11 text-base font-medium italic text-body-color sm:text-lg">
              {comment}
            </p>

            <h4 className="text-xl font-semibold text-dark">{name}</h4>
            <p className="text-base text-body-color">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
