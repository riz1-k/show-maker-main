import React from "react";
import TeamMember from "@/components/common/TeamMember";

const TeamSection = () => {
  return (
    <section id="team" className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-4 text-5xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Awesome Founders
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamMember
            name="Tabraz Ahmed"
            role="CEO"
            imageSrc="/Tab.jpg"
            redirect="http://linkedin.com/in/tabraz-ahmed-b9821817a"
          />

          <TeamMember
            name="Mithun Sam"
            role="COO"
            imageSrc="/SHOWMAKERSVG123.svg"
            redirect="https://www.linkedin.com/in/mithun-sam"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
