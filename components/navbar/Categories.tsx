"use client";
import React from "react";
import { IconType } from "react-icons";
import { MdHolidayVillage } from "react-icons/md";
import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import CategoryItem from "./CategoryItem";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    name: "Village",
    icon: MdHolidayVillage as IconType,
    href: "/?q=village",
  },
  {
    name: "City",
    icon: FaCity as IconType,
    href: "/?q=city",
  },
  {
    name: "Beach",
    icon: FaUmbrellaBeach as IconType,
    href: "/?q=beach",
  },
  {
    name: "Camp",
    icon: GiCampingTent as IconType,
    href: "/?q=camp",
  },
];

const Categories = () => {
  const queryParam = useSearchParams().get("q");

  return (
    <div className="flex items-centers justify-center gap-5">
      {
        categories.map((category, i) => (
          <CategoryItem
            key={i}
            {...category}
            selected={queryParam === category.name.toLowerCase()}
          />
        )) as []
      }
    </div>
  );
};

export default Categories;
