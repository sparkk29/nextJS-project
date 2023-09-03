import React from "react";
import Link from "next/link";
import Navbar from "@components/navbar";
import dynamic from 'next/dynamic';
// const Navbar = dynamic(() => import('@components/navbar'));

const Sidebar = dynamic(() => import('@components/sidebar'));
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="p-4 max-h-screen overflow-auto"> {props.children}</div>
      </div>
    </div>
  );
}   

export default DashboardLayout;