import React from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-gray-800 py-4 px-5 flex  justify-between item-center text-white">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex item-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen bg-black w-[15vw] text-2xl text-white">
          <ul className="pt-5 flex-col gap-5 px-3">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/todos">Todos</Link>
            </li>
            <li>
              <Link href="/dashboard/users">Users</Link>
            </li>
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="p-4 max-h-screen overflow-auto"> {props.children}</div>
      </div>
    </div>
  );
}   

export default DashboardLayout;