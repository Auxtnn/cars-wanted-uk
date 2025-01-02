import React from "react";
import ProjectCard from "./Card";

const RecentInitiatives: React.FC = () => {
  return (
    <section className="py-12 ">
      <div className="w-full md:w-11/12 px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="About the applicant"
            description="You’ll need to prove you are claiming benefits with either:"
            items={[
              "Your most recent award letter (not more than 12 months old), or",
              "Your full Universal Credit service statement",
            ]}
            closure="You will also need to provide a form of photo ID showing your name-such as a driver’s licence, passport or UK Blue Badge."
          />
          <ProjectCard
            title="Evidence required"
            description="To apply, you will need to provide information and upload documents about you and the vehicle you want to apply to the scheme with."
            items={[
              "You may upload photos, scans or screenshots, including from your phone, but they must show the entire page and be clear enough to read.",
              "Files can be uploaded in JPG, PNG, or PDF formats.",
            ]}
            closure=""
          />
        </div>
      </div>
    </section>
  );
};

export default RecentInitiatives;
