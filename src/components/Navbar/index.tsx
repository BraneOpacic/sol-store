"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { push } = useRouter();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div onClick={() => push("/")} className="btn btn-ghost text-xl">
          SolShop
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control w-44 md:w-44 lg:w-96">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-44 md:w-44 lg:w-96"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                height={30}
                width={30}
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
