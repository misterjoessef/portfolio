import React from "react";
import { SVGIconData } from "@/modeltypings";

export default function Lambda({ size = 42 }: SVGIconData) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={+size}
        height={+size}
        viewBox="0 0 256 256"
      >
        <defs>
          <linearGradient
            id="logosAwsLambda0"
            x1="0%"
            x2="100%"
            y1="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#C8511B" />
            <stop offset="100%" stopColor="#F90" />
          </linearGradient>
        </defs>
        <path fill="url(#logosAwsLambda0)" d="M0 0h256v256H0z" />
        <path
          fill="#FFF"
          d="M89.624 211.2H49.89l43.945-91.853l19.912 40.992L89.624 211.2Zm7.079-100.63a3.216 3.216 0 0 0-2.887-1.805h-.01a3.204 3.204 0 0 0-2.886 1.82L41.913 213.022a3.203 3.203 0 0 0 2.893 4.58l46.848-.001a3.21 3.21 0 0 0 2.9-1.83l25.65-54.08a3.183 3.183 0 0 0-.016-2.762L96.703 110.57ZM207.985 211.2h-39.477L105.174 78.624a3.206 3.206 0 0 0-2.897-1.824h-25.83l.03-32h50.626l63.042 132.573a3.209 3.209 0 0 0 2.897 1.827h14.943v32Zm3.208-38.4h-16.121L132.03 40.227a3.21 3.21 0 0 0-2.9-1.827H73.273a3.206 3.206 0 0 0-3.208 3.197l-.035 38.4c0 .851.333 1.664.94 2.265c.6.602 1.414.938 2.267.938h27.017l63.337 132.576a3.205 3.205 0 0 0 2.893 1.824h44.709a3.203 3.203 0 0 0 3.207-3.2V176c0-1.766-1.434-3.2-3.207-3.2Z"
        />
      </svg>
    </div>
  );
}
