import Image from "next/image";

export const AdBanner = () => {
  return (
    <div className="w-full h-[500px] relative my-10">
      <Image src="/images/add.jpg" fill={true} alt="Advertisement" objectFit="cover" />
    </div>
  );
};
