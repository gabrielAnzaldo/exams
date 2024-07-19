"use client";
import { useState } from "react";
import { fecher } from "../api/useApi";

const FilterBar = async () => {
  let categories = [];
  try {
    categories = await fecher("https://fakestoreapi.com/products/categories");
  } catch (error) {
    console.log("error: ", error);
  }
  return (
    <div>
      {categories?.map((item: string, index: number) => (
        <label key={index}>
          <input
            type="checkbox"
            name="category4"
            //   checked={}
            //   onChange={}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
