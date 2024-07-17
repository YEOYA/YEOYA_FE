export const Button = ({ children, onClick, checked }) => {
  return (
    <button
      className={`${
        !!!checked ? "text-gray-700" : "text-white bg-black border-black"
      } flex gap-2 items-center text-semibold18 border-2 w-fit px-5 py-3 leading-none rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
