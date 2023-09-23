import React from "react";
import Image from "next/image";

export const Categories = () => {
  return (
    <div className="w-full my-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
      Top Picks by Category
      </h2>
      <p className="text-gray-600 mb-4">
      Your Style, Your Way: Unleash Your Fashionista!
      </p>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="w-full relative cursor-pointer group col-span-3">
          <div className="w-full z-10 absolute text-2xl bottom-0 pl-3 pb-3 font-semibold text-white bg-black bg-opacity-50 shadow-md hover:opacity-100">
            Under Garments
          </div>

          <div className="h-[400px] relative opacity-100 group-hover:opacity-80 transition ease-in-out">
            <Image
              src="/images/hiking.jpg"
              layout="fill"
              objectFit="cover"
              alt="test"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <div className="w-full relative cursor-pointer group">
            <div className="w-full z-10 absolute text-2xl bottom-0 pl-3 pb-3 font-semibold text-white bg-black bg-opacity-50 shadow-md hover:opacity-100">
              Shoe
            </div>

            <div className="h-[200px] relative opacity-100 group-hover:opacity-80 transition ease-in-out">
              <Image
                src="/images/hiking.jpg"
                layout="fill"
                objectFit="cover"
                alt="test"
              />
            </div>
          </div>
          <div className="w-full relative cursor-pointer group">
            <div className="w-full z-10 absolute text-2xl bottom-0 pl-3 pb-3 font-semibold text-white bg-black bg-opacity-50 shadow-md hover:opacity-100">
              Others
            </div>

            <div className="h-[200px] relative opacity-100 group-hover:opacity-80 transition ease-in-out">
              <Image
                src="/images/hiking.jpg"
                layout="fill"
                objectFit="cover"
                alt="test"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
