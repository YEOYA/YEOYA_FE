import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex justify-center w-full min-h-[100vh] bg-gray-500 overflow-y-auto">
      <div className="max-w-screen-md w-full min-h-100vh bg-[#ffffff]">
        <Outlet />
      </div>
    </div>
  );
};
