import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h1>
        im root
        <Outlet />
      </h1>
    </div>
  );
}
