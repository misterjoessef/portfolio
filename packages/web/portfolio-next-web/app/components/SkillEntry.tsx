import React from "react";
import { SkillData } from "@/modeltypings";

interface SkillEntryProps extends SkillData {
  hideText?: boolean;
}

export default function SkillEntry({
  skillIcon,
  skillName,
  hideText = false,
}: SkillEntryProps) {
  return (
    <div className="flex grow lg:grow-0 bg-primary text-primary-content rounded-md p-1">
      <div className="flex flex-row space-x-2 p-1 mx-auto">
        <div className=" bg-primary-focus p-1 rounded-md">{skillIcon}</div>
        {hideText == false && (
          <div className="my-auto font-Roboto hidden md:block">{skillName}</div>
        )}
      </div>
    </div>
  );
}
