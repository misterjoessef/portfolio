import React from "react";
import { SVGIconData } from "@/modeltypings";

export default function FirebaseIcon({ size = 42 }: SVGIconData) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={+size}
        height={+size}
        viewBox="0 0 256 351"
      >
        <defs>
          <filter
            id="logosFirebase0"
            width="200%"
            height="200%"
            x="-50%"
            y="-50%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="17.5"
            />
            <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            />
          </filter>
          <filter
            id="logosFirebase1"
            width="200%"
            height="200%"
            x="-50%"
            y="-50%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="3.5"
            />
            <feOffset
              dx="1"
              dy="-9"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
            />
          </filter>
          <path
            id="logosFirebase2"
            d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z"
          />
          <path
            id="logosFirebase3"
            d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744l31.678 58.556Z"
          />
        </defs>
        <path
          fill="#FFC24A"
          d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z"
        />
        <use fill="#FFA712" fillRule="evenodd" href="#logosFirebase2" />
        <use filter="url(#logosFirebase0)" href="#logosFirebase2" />
        <path
          fill="#F4BD62"
          d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z"
        />
        <use fill="#FFA50E" fillRule="evenodd" href="#logosFirebase3" />
        <use filter="url(#logosFirebase1)" href="#logosFirebase3" />
        <path
          fill="#F6820C"
          d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
        />
        <path
          fill="#FDE068"
          d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
        />
        <path
          fill="#FCCA3F"
          d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z"
        />
        <path
          fill="#EEAB37"
          d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752l-115.99 64.689Z"
        />
      </svg>
    </div>
  );
}
