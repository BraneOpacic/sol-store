"use client";

import Navbar from "@/components/Navbar";
import { SideDrawer } from "@/components/SideDrawer";
import React, { ReactNode } from "react";

interface RootProviderProps {
  children: ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <SideDrawer />
    </div>
  );
};

export default RootProvider;
