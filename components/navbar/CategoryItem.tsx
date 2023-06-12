"use client";
import { CategoryItemProps } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";
const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  icon: Icon,
  href,
  selected,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(href)}
      className={`${
        selected && "border-b-2 border-red-500"
      } flex items-center justify-center gap-1 text-xl hover:bg-gray-300 px-2 py-1 rounded-md cursor-pointer transition-colors duration`}
    >
      <Icon />
      {name}
    </div>
  );
};

export default CategoryItem;
