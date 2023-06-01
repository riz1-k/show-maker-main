import React from "react";
import TeamMember from "@/components/common/TeamMember";

const TeamSection = () => {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamMember
            name="Coriss Ambady"
            role="Web Developer"
            imageSrc="/team/team-01/image-01.jpg"
          />
          <TeamMember
            name="Glorius Cristian"
            role="App Developer"
            imageSrc="/team/team-01/image-02.jpg"
          />
          <TeamMember
            name="Jackie Sanders"
            role="UI/UX Designer"
            imageSrc="/team/team-01/image-03.jpg"
          />
          <TeamMember
            name="Nikolas Brooten"
            role="Sales Manager"
            imageSrc="/team/team-01/image-04.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
