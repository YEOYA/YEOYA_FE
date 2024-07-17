import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex justify-center w-full h-[100vh] bg-gray-500">
      <div className="max-w-screen-md w-full h-full bg-[#ffffff]">
        <Outlet />
      </div>
    </div>
  );
};
