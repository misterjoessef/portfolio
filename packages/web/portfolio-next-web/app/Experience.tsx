import React from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  reactSkill,
  typescriptSkill,
  tailwindSkill,
  javascriptSkill,
  cssSkill,
  htmlSkill,
  nodeSkill,
  GraphqlSkill,
  nextSkill,
  pythonSkill,
  firebaseSkill,
  dockerSkill,
  githubSkill,
  sstSkill,
  stripeSkill,
  stripeConnectSkill,
  unitySkill,
  csharpSkill,
  dotNetSkill,
  swiftSkill,
  sagemakerSkill,
  dynamodbSkill,
  appsyncSkill,
  apigatewaySkill,
  snsSkill,
  sqsSkill,
  lambdaSkill,
  cognitoSkill,
  s3Skill,
  fastlaneSkill,
  rubySkill,
} from "./components/SkillsProvider";
import TimelineEntryIU, {
  TimelineEntryProps,
} from "./components/TimelineEntryUI";
import WebSpecialIcon from "./images/WebSpecialIcon";
import MobileIcon from "./images/MobileIcon";

export default function Experience() {
  const timelineEntries: TimelineEntryProps[] = [
    {
      title: "MLTask",
      // tag: "Active",
      icon: <WebSpecialIcon size={20} />,
      from: new Date(2022, 12, 1),
      titleLink: "https://mltask.com/",
      techUsed: [
        reactSkill,
        typescriptSkill,
        tailwindSkill,
        javascriptSkill,
        cssSkill,
        htmlSkill,
        nodeSkill,
        GraphqlSkill,
        nextSkill,
        pythonSkill,
        dockerSkill,
        githubSkill,
        sstSkill,
        stripeSkill,
        sagemakerSkill,
        dynamodbSkill,
        appsyncSkill,
        apigatewaySkill,
        snsSkill,
        sqsSkill,
        lambdaSkill,
        cognitoSkill,
        s3Skill,
      ],
      content: (
        <div>
          <p className="mb-4 text-base-content ">
            Complete incredible tasks using AI easily and at an affordable
            price, no fiddling with your machine, no driver issues, no github
            headaches, just use a simple UI to build incredible things
          </p>
        </div>
      ),
    },
    {
      title: "Cryptocrats",
      titleLink: "https://cryptocrats.xyz/",
      icon: <WebSpecialIcon size={20} />,
      from: new Date(2021, 10, 0),
      to: new Date(2022, 7, 0),
      techUsed: [
        firebaseSkill,
        reactSkill,
        typescriptSkill,
        tailwindSkill,
        javascriptSkill,
        cssSkill,
        htmlSkill,
        nodeSkill,
        githubSkill,
      ],
      content: (
        <div>
          <p className="text-base-content">
            Made during the last crypto hype cycle, I was a huge fan of NFT
            minting, but it was impossible to keep track of different mints, on
            different blockchains, so I created my own website: cryptocrats.xyz
            on the backend I created an internal tool that given a twitter
            profile would red the profile description and try to infer the
            date/time of the mint, and quickly generate the database entry on
            firebase
          </p>
        </div>
      ),
    },
    {
      title: "Unity 3D",
      icon: <MobileIcon size={16} />,
      from: new Date(2017, 8, 1),
      to: new Date(2021, 3, 1),
      techUsed: [
        unitySkill,
        csharpSkill,
        dotNetSkill,
        rubySkill,
        fastlaneSkill,

        githubSkill,
      ],
      content: (
        <div>
          <p className="text-base-content">
            Worked with hyper casual pulishers, namely Voodoo, and Supersonic
            studios, Created over 30 different hyper casual titles on iOS, using
            Unity
          </p>
        </div>
      ),
    },
    {
      title: "Lemonade.io",
      icon: <MobileIcon size={16} />,
      from: new Date(2015, 5, 1),
      to: new Date(2017, 8, 1),
      techUsed: [swiftSkill, rubySkill, fastlaneSkill, githubSkill],
      content: (
        <div>
          <p className="text-base-content">
            Worked on an amazing note taking app called Cassette.io that later
            got aquihired by evernote
          </p>
        </div>
      ),
    },
    {
      title: "👶",
      icon: <AiFillHeart size={18} />,
      hideDate: true,
      techUsed: [],
      content: (
        <div>
          <p className="text-base-content font-normal ">
            i Joined the sim in one of the millenial years of our lord
          </p>
          <div className="flex flex-row space-x-2">
            <div className="flex grow lg:grow-0 bg-primary text-primary-content rounded-md p-1">
              <div className="flex flex-row space-x-2 p-1 mx-auto">
                <p>👧</p>
              </div>
            </div>
            <div className="flex grow lg:grow-0 bg-primary text-primary-content rounded-md p-1">
              <div className="flex flex-row space-x-2 p-1 mx-auto">
                <p>👦</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  function renderHeader() {
    return (
      <h1 className="text-6xl mx-auto divider p-5 font-Raleway text-base-content">
        {"XP"}
      </h1>
    );
  }
  function renderTimeline() {
    return (
      <div className="mx-5">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timelineEntries.map((timelineEntry, index) => {
            return (
              <li key={index}>
                <TimelineEntryIU {...timelineEntry} />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
  return (
    <section className="flex w-full my-auto flex-col place-content-center ">
      <div className="w-full ">
        {renderHeader()}
        {renderTimeline()}
      </div>
    </section>
  );
}
