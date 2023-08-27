import { SkillData } from "@/modeltypings";

import ReactIcon from "../images/ReactIcon";
import Cognito from "../images/Cognito";
import DynamoDB from "../images/DynamoDB";
import S3 from "../images/S3";
import APIGateway from "../images/APIGateway";
import Lambda from "../images/Lambda";
import AppSync from "../images/AppSync";
import SNS from "../images/SNS";
import SQS from "../images/SQS";
import TypescriptIcon from "../images/TypescriptIcon";
import JavascriptIcon from "../images/JavascriptIcon";
import CSSIcon from "../images/CSSIcon";
import TailwindIcon from "../images/TailwindIcon";
import HTMLIcon from "../images/HTMLIcon";
import NodeIcon from "../images/NodeIcon";
import GraphQL from "../images/GraphQL";
import NextJsIcon from "../images/NextJsIcon";
import Python from "../images/Python";
import DockerIcon from "../images/DockerIcon";
import GithubIcon from "../images/GithubIcon";
import StripeIcon from "../images/StripeIcon";
import SSTIcon from "../images/SSTIcon";
import SwiftIcon from "../images/SwiftIcon";
import UnityIcon from "../images/UnityIcon";
import CSharpIcon from "../images/CSharpIcon";
// import IosIcon from "../images/iOSIcon";
import SageMakerIcon from "../images/SageMakerIcon";
import FirebaseIcon from "../images/FirebaseIcon";
import DotNetFrameworkIcon from "../images/DotNetFrameworkIcon";
import FastlaneIcon from "../images/FastlaneIcon";
import RubyIcon from "../images/RubyIcon";

export const reactSkill = {
  skillName: "React",
  skillIcon: (
    <div>
      <ReactIcon />
    </div>
  ),
};
export const typescriptSkill = {
  skillName: "Typescript",
  skillIcon: (
    <div>
      <TypescriptIcon />
    </div>
  ),
};
export const tailwindSkill = {
  skillName: "Tailwind",
  skillIcon: (
    <div>
      <TailwindIcon />
    </div>
  ),
};
export const javascriptSkill = {
  skillName: "Javascript",
  skillIcon: (
    <div>
      <JavascriptIcon />
    </div>
  ),
};
export const cssSkill = {
  skillName: "CSS",
  skillIcon: (
    <div>
      <CSSIcon />
    </div>
  ),
};
export const htmlSkill = {
  skillName: "HTML",
  skillIcon: (
    <div>
      <HTMLIcon />
    </div>
  ),
};
export const nodeSkill = {
  skillName: "Node",
  skillIcon: (
    <div>
      <NodeIcon />
    </div>
  ),
};
export const GraphqlSkill = {
  skillName: "Graphql",
  skillIcon: (
    <div>
      <GraphQL />
    </div>
  ),
};
export const nextSkill = {
  skillName: "Nextjs13",
  skillIcon: (
    <div>
      <NextJsIcon />
    </div>
  ),
};
export const pythonSkill = {
  skillName: "Python",
  skillIcon: (
    <div>
      <Python />
    </div>
  ),
};
export const firebaseSkill = {
  skillName: "Firebase",
  skillIcon: (
    <div>
      <FirebaseIcon />
    </div>
  ),
};
export const dockerSkill = {
  skillName: "docker",
  skillIcon: (
    <div>
      <DockerIcon />
    </div>
  ),
};
export const githubSkill = {
  skillName: "github",
  skillIcon: (
    <div>
      <GithubIcon />
    </div>
  ),
};
export const sstSkill = {
  skillName: "",
  skillIcon: (
    <div>
      <SSTIcon />
    </div>
  ),
};
export const stripeSkill = {
  skillName: "Stripe",
  skillIcon: (
    <div>
      <StripeIcon />
    </div>
  ),
};
export const stripeConnectSkill = {
  skillName: "Stripe Connect",
  skillIcon: (
    <div>
      <StripeIcon />
    </div>
  ),
};
export const unitySkill = {
  skillName: "Unity",
  skillIcon: (
    <div className="flex flex-row space-x-2">
      <UnityIcon />
    </div>
  ),
};
export const csharpSkill = {
  skillName: "C#",
  skillIcon: (
    <div className="flex flex-row space-x-2">
      <CSharpIcon />
    </div>
  ),
};
export const dotNetSkill = {
  skillName: ".NET",
  skillIcon: (
    <div className="flex flex-row space-x-2">
      <DotNetFrameworkIcon />
    </div>
  ),
};
export const sagemakerSkill = {
  skillName: "SageMaker",
  skillIcon: (
    <div>
      <SageMakerIcon />
    </div>
  ),
};
export const dynamodbSkill = {
  skillName: "DynamoDB",
  skillIcon: (
    <div>
      <DynamoDB />
    </div>
  ),
};
export const appsyncSkill = {
  skillName: "AppSync",
  skillIcon: (
    <div>
      <AppSync />
    </div>
  ),
};
export const apigatewaySkill = {
  skillName: "APIGateway",
  skillIcon: (
    <div>
      <APIGateway />
    </div>
  ),
};
export const snsSkill = {
  skillName: "SNS",
  skillIcon: (
    <div>
      <SNS />
    </div>
  ),
};
export const sqsSkill = {
  skillName: "SQS",
  skillIcon: (
    <div>
      <SQS />
    </div>
  ),
};
export const lambdaSkill = {
  skillName: "Lambda",
  skillIcon: (
    <div>
      <Lambda />
    </div>
  ),
};
export const cognitoSkill = {
  skillName: "Cognito",
  skillIcon: (
    <div>
      <Cognito />
    </div>
  ),
};
export const s3Skill = {
  skillName: "S3",
  skillIcon: (
    <div>
      <S3 />
    </div>
  ),
};
export const swiftSkill = {
  skillName: "Swift (iOS)",
  skillIcon: (
    <div className="flex flex-row space-x-2">
      <SwiftIcon />
      {/* <IosIcon /> */}
    </div>
  ),
};
export const fastlaneSkill = {
  skillName: "Fastlane Tools",
  skillIcon: (
    <div className="flex flex-row space-x-2">
      <FastlaneIcon />
      {/* <IosIcon /> */}
    </div>
  ),
};
export const rubySkill = {
  skillName: "Ruby",
  skillIcon: (
    <div className="flex flex-row space-x-2">
      <RubyIcon />
      {/* <IosIcon /> */}
    </div>
  ),
};

export const frontendSkills: SkillData[] = [
  reactSkill,
  typescriptSkill,
  tailwindSkill,
  javascriptSkill,
  cssSkill,
  htmlSkill,
];

export const backendSkills: SkillData[] = [
  nodeSkill,
  GraphqlSkill,
  nextSkill,
  pythonSkill,
  firebaseSkill,
];

export const toolsSkills: SkillData[] = [
  dockerSkill,
  githubSkill,
  sstSkill,
  stripeSkill,
  stripeConnectSkill,
  unitySkill,
  csharpSkill,
];

export const awsSkills: SkillData[] = [
  sagemakerSkill,
  dynamodbSkill,
  appsyncSkill,
  apigatewaySkill,
  snsSkill,
  sqsSkill,
  lambdaSkill,
  cognitoSkill,
  s3Skill,
];

export const formerSkills: SkillData[] = [swiftSkill];
