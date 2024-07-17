import Logo_dark from "../assets/Logo_dark.svg?react";
import "./splash.css";

export const Splash = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-950">
      {/* <Logo_dark /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="none"
        viewBox="0 0 64 64"
      >
        <rect
          className="rect1"
          width="20"
          height="8"
          x="16"
          y="8"
          fill="url(#a)"
          rx="4"
        />
        <rect
          className="rect2"
          width="20"
          height="8"
          x="28"
          y="48"
          fill="url(#b)"
          rx="4"
        />
        <path
          className="path1"
          stroke="#fff"
          stroke-linecap="square"
          stroke-width="8"
          d="M20 24h12v16h12"
        />
        <defs>
          <linearGradient
            id="a"
            x1="16"
            x2="36"
            y1="12"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="48"
            x2="28"
            y1="52"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
