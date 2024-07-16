import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex justify-center w-full h-[100vh]">
      <div className="max-w-screen-md w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};
