import FAQItem from "@/components/common/FAQ";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <span
        className="absolute top-0 left-0 right-0 block h-20   bg-opacity-80 
      from-transparent
      to-[#000]
      bg-gradient-to-t

      "
      />
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What makes SHOWMAKER stand out in corporate event management?",
    answer:
      "SHOWMAKER sets itself apart through its seamless integration of creativity, innovation, and meticulous planning, ensuring unforgettable corporate events that leave a lasting impression.",
  },
  {
    question:
      "How does SHOWMAKER handle event logistics for corporate clients?",
    answer:
      "SHOWMAKER takes care of every detail, from venue selection and negotiation to registration management, audiovisual support, catering, and more. Our team ensures a hassle-free experience for clients and their attendees.",
  },
  {
    question:
      "Can SHOWMAKER provide unique and engaging entertainment options for corporate events?",
    answer:
      "Absolutely! SHOWMAKER offers a diverse range of entertainment choices, including captivating performers, renowned speakers, and immersive experiences tailored to match your event's theme and objectives.",
  },
  {
    question:
      "How does SHOWMAKER ensure the safety and security of corporate events?",
    answer:
      "SHOWMAKER prioritizes the safety and security of all attendees. We collaborate closely with trusted professionals, implement thorough risk assessments, and establish comprehensive emergency response protocols.",
  },
  {
    question:
      "What is SHOWMAKER's approach to budget management for corporate events?",
    answer:
      "SHOWMAKER understands the importance of staying within budget without compromising quality. Our team works closely with clients to develop a strategic and transparent budget plan, optimizing resources for a successful event.",
  },
];
