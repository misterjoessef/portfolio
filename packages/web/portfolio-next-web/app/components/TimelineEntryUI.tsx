"use client";
import React from "react";
import { SkillData } from "@/modeltypings";
import SkillEntry from "./SkillEntry";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export type TimelineEntryProps = {
  title: string;
  titleLink?: string;
  icon?: React.ReactElement;
  tag?: string | undefined;
  from?: Date;
  to?: Date;
  hideDate?: boolean;
  content: React.ReactElement;
  techUsed: SkillData[];
};

export default function TimelineEntryIU(entry: TimelineEntryProps) {
  function renderTimelineIcon() {
    return (
      <span className="mt-1 absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-2 ring-secondary text-primary-content">
        {entry.icon}
      </span>
    );
  }
  function renderTimelineEntryHeader(entry: TimelineEntryProps) {
    return (
      <h3 className="flex items-center text-2xl text-base-content font-Raleway font-bold">
        {entry.titleLink && (
          <button
            onClick={() => {
              window.open(entry.titleLink, "_blank");
            }}
          >
            {entry.title}
          </button>
        )}
        {entry.titleLink == undefined && entry.title}

        {entry.tag && (
          <span className="bg-blue-100 text-blue-800 text-md font-medium mr-2  rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
            {entry.tag}
          </span>
        )}
      </h3>
    );
  }
  function renderTimelineEntryDate(entry: TimelineEntryProps) {
    if (entry.hideDate == true) {
      return;
    }
    return (
      <>
        <div className="divider divider-horizontal w-2"></div>
        <div className="flex flex-row font-Roboto text-sm my-auto text-warning">
          {entry.from && (
            <time className="block leading-none ">
              {entry.from!.toLocaleString("en-GB", {
                // day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          )}
          <div className="my-auto mx-2">
            <BsArrowRight />
          </div>
          <time className="block leading-none ">
            {entry.to &&
              entry.to!.toLocaleString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            {entry.to == undefined && "Present"}
          </time>
        </div>
      </>
    );
  }
  function renderSkillsSection() {
    return (
      <div className="flex flex-row flex-wrap">
        {entry.techUsed.map((techEntry, index) => {
          return (
            <div key={index} className="p-1 grow lg:grow-0">
              <SkillEntry {...techEntry} hideText={true} />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="mb-8 ml-6 space-y-2">
      {renderTimelineIcon()}
      <div className="flex flex-row space-x-1">
        {renderTimelineEntryHeader(entry)}
        {renderTimelineEntryDate(entry)}
      </div>
      <p className="font-Roboto">{entry.content}</p>
      {renderSkillsSection()}
    </div>
  );
}
