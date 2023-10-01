"use client";

import Filters from "@/features/catrgory/Filters.component";
import { Products } from "@/features/home/products.component";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="container grid grid-cols-5">
      <div className="col-span-1">
        <Filters />
      </div>
      <div className="col-span-4">
        <Products />
      </div>
    </div>
  );
};

export default Category;
