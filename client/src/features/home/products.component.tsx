"use client";
import Image from "next/image";
import { RatingStar } from "..";

export const Products = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const destinations = [
    {
      id: 1,
      title: "River Ride",
      description:
        "Embark on an exciting river ride adventure and experience the thrill of navigating through scenic waters.",
      image: "/images/river.jpg",
    },
    {
      id: 2,
      title: "Hiking",
      description:
        "Explore nature's wonders on a hiking expedition, immersing yourself in breathtaking landscapes and challenging trails.",
      image: "/images/hiking.jpg",
    },
    {
      id: 3,
      title: "Mountain",
      description:
        "Conquer towering mountains and enjoy stunning vistas from their peaks, an adventure that's both awe-inspiring and invigorating.",
      image: "/images/mountain.jpg",
    },
    {
      id: 4,
      title: "Sea",
      description:
        "Set sail on the open sea, where endless horizons meet the sky, and you can experience the tranquility and vastness of the ocean.",
      image: "/images/sea.jpg",
    },
    {
      id: 1,
      title: "River Ride",
      description:
        "Embark on an exciting river ride adventure and experience the thrill of navigating through scenic waters.",
      image: "/images/river.jpg",
    },
    {
      id: 2,
      title: "Hiking",
      description:
        "Explore nature's wonders on a hiking expedition, immersing yourself in breathtaking landscapes and challenging trails.",
      image: "/images/hiking.jpg",
    },
    {
      id: 3,
      title: "Mountain",
      description:
        "Conquer towering mountains and enjoy stunning vistas from their peaks, an adventure that's both awe-inspiring and invigorating.",
      image: "/images/mountain.jpg",
    },
    {
      id: 4,
      title: "Sea",
      description:
        "Set sail on the open sea, where endless horizons meet the sky, and you can experience the tranquility and vastness of the ocean.",
      image: "/images/sea.jpg",
    },
  ];

  const ProductCard = ({
    id,
    title,
    description,
    image,
  }: {
    id: number;
    title: string;
    description: string;
    image: string;
  }) => {
    return (
      <div key={id} className="w-full relative cursor-pointer group">
        <div className="h-[300px] relative opacity-100 group-hover:opacity-80 transition ease-in-out">
          <Image src={image} layout="fill" objectFit="cover" alt={title} />
        </div>
        <h4 className="truncate text-gray-600 mt-2">{title}</h4>
        <RatingStar rating={3} />
        <p className="truncate text-gray-600 mt-2">{description}</p>
      </div>
    );
  };

  return (
    <div className="w-full mt-20">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <ProductCard
            key={destination.id}
            id={destination.id}
            title={destination.title}
            description={destination.description}
            image={destination.image}
          />
        ))}
      </div>
    </div>
  );
};
