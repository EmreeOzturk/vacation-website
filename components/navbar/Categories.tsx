"use client";
import React from "react";
import { IconType } from "react-icons";
import { MdHolidayVillage } from "react-icons/md";
import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import CategoryItem from "./CategoryItem";

export const categories = [
  {
    name: "Village",
    icon: MdHolidayVillage as IconType,
    href: "?village",
  },
  {
    name: "City",
    icon: FaCity as IconType,
    href: "?city",
  },
  {
    name: "Beach",
    icon: FaUmbrellaBeach as IconType,
    href: "?beach",
  },
  {
    name: "Camp",
    icon: GiCampingTent as IconType,
    href: "?camp",
  },
];

const Categories = () => {
  return (
    <div className="flex items-centers justify-center gap-5">
      {
        categories.map((category, i) => (
          <CategoryItem key={i} {...category} selected={false} />
        )) as []
      }
    </div>
  );
};

export default Categories;
