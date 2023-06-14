"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import UserMenuItem from "./UserMenuItem";
import { useDispatch } from "react-redux";
import { registerModalFunc, loginModalFunc } from "@/redux/modalSlice";
const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between gap-4 mr-2 text-2xl relative">
      <AiOutlineMenu
        onClick={() => setShowMenu(!showMenu)}
        style={{ cursor: "pointer" }}
      />
      <AiOutlineUser style={{ cursor: "pointer" }} />
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } absolute top-16 right-0 bg-gray-200 rounded-md p-2 w-48 shadow-gray-700`}
      >
        <UserMenuItem
          name="Sign In"
          onClick={() => {
            dispatch(loginModalFunc());
          }}
          icon={BiLogInCircle}
        />
        <UserMenuItem
          name="Sign Up"
          onClick={() => {
            dispatch(registerModalFunc());
          }}
          icon={BiLogOutCircle}
        />
      </div>
    </div>
  );
};

export default UserMenu;
