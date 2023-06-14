"use client";
import React from "react";
import type { UserMenuItemsProps } from "@/types";
const UserMenuItem: React.FC<UserMenuItemsProps> = ({
  name,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        onClick={onClick}
        className="flex items-center justify-start gap-2 my-2 cursor-pointer hover:underline underline-offset-4"
      >
        <Icon />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default UserMenuItem;
