import React from "react";
import { SkillData } from "@/modeltypings";
import SkillEntry from "./components/SkillEntry";
import {
  frontendSkills,
  backendSkills,
  awsSkills,
  toolsSkills,
  formerSkills,
} from "./components/SkillsProvider";

type SkillCategory = { name: string; skills: SkillData[] };
export default function Skills() {
  const skillCategories: SkillCategory[] = [
    { name: "Frontend", skills: frontendSkills },
    { name: "Backend", skills: backendSkills },
    { name: "AWS", skills: awsSkills },
    { name: "Tools", skills: toolsSkills },
    { name: "Former Experiences", skills: formerSkills },
  ];

  function renderHeaderSection(categoryName: string) {
    return (
      <div className="flex flex-row w-1/6 p-2 font-Raleway text-base-content">
        <span className="text-3xl my-auto">{categoryName}</span>
        <div className="ml-auto divider divider-horizontal"></div>
      </div>
    );
  }
  function renderSkillCategorySection(category: SkillCategory) {
    return (
      <div className="flex flex-col lg:flex-row">
        {renderHeaderSection(category.name)}
        <ul className="flex flex-row  my-auto mx-4 lg:mx-0 flex-wrap lg:w-5/6 ">
          {category.skills.map((skill, index) => {
            return (
              <li className="flex grow lg:grow-0 m-1" key={index}>
                <SkillEntry {...skill} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <section className="flex w-full my-auto flex-col place-content-center min-h-screen">
      <div className="w-full ">
        <h1 className="text-6xl mx-auto divider p-5 font-Raleway text-base-content">
          {"What I Do 💪"}
        </h1>
      </div>

      <div className="flex flex-col p-2 space-y-4 ">
        {skillCategories.map((x, index) => {
          return <div key={index}> {renderSkillCategorySection(x)}</div>;
        })}
      </div>
      <div className="divider mx-auto w-3/5"></div>
      <div className="mx-auto mt-10 flex flex-col space-y-4 text-base-content">
        <span className=" text-6xl mx-auto font-Raleway">
          Most importantly....
        </span>
        <p className="text-3xl p-4 mx-auto max-w-6xl text-center">
          My quest for knowledge never stops, I am always learning new things,
          and will add more to my skillset as I travel through this wonderful
          simulation
        </p>
      </div>
    </section>
  );
}
