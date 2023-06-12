"use client";
import { CategoryItemProps } from "@/types";
import React from "react";

const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  icon: Icon,
  href,
  selected,
}) => {
  return (
    <div
      className={`${selected && 'border-b-2 border-red-500'} flex items-center justify-center gap-1 text-xl hover:bg-red-200`
        
      }
    >
      <Icon />
      {name}
    </div>
  );
};

export default CategoryItem;
