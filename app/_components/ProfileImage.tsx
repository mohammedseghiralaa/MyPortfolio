import React, { JSX } from "react";
import Image from "next/image";

export default function ProfileImage(): JSX.Element {
  return (
    <div className="relative  max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto lg:ml-auto animate-floating">
      <Image
        src="/images/profile.png"
        alt="Profile Image"
        height={300}
        width={350}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
