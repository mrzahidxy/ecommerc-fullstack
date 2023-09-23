"use client";

import { FormikInputField } from "@/features/ui";
import { Form, Formik } from "formik";
import { useState } from "react";

export function MainSearch() {
  const [searchTopic, setSearchTopic] = useState<string>("search-all");

  const handleSearchTopic = (value: string) => {
    setSearchTopic(value);
  };

  let titleText = (() => {
    switch (searchTopic) {
      case "destinations":
        return "Explore places to refresh?";
      case "restaurants":
        return "Find places to eat";
      default:
        return "Where to";
    }
  })();

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl lg:4xl font-bold my-10 text-gray-800">
          {titleText}
        </h1>
        <ul className="flex gap-5 text-sm lg:text-xl font-bold text-gray-800 mb-4">
          <li
            className={`cursor-pointer  ${
              searchTopic === "search-all" && "border-b-4 border-blue-400"
            }`}
            onClick={() => handleSearchTopic("search-all")}
          >
            Search All
          </li>
          <li
            className={`cursor-pointer  ${
              searchTopic === "restaurants" && "border-b-4 border-blue-400"
            }`}
            onClick={() => handleSearchTopic("restaurants")}
          >
            Resturants
          </li>
          <li
            className={`cursor-pointer  ${
              searchTopic === "destinations" && "border-b-4 border-blue-400"
            }`}
            onClick={() => handleSearchTopic("destinations")}
          >
            Destinations
          </li>
        </ul>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <FormikInputField
              name="search"
              inputFieldProps={{
                placeholder: titleText,
                inputClassName:
                  "outlined-none py-3 rounded-full w-[350px] lg:w-[600px]",
              }}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
