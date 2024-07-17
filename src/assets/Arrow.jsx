export const Arrow = ({
  size = 24,
  className = "",
  onClick,
  direction = "left",
}) => {
  const rotate = {
    left: "rotate-[0deg]",
    top: "rotate-[90deg]",
    right: "rotate-[180deg]",
    bottom: "rotate-[270deg]",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className} ${
        rotate[direction]
      }`}
    >
      <path
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
