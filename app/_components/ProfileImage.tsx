"use client";
import { JSX } from "react";
import Image from "next/image";
import { useInfoCv } from "../context/CvContext";
import Spinner from "./Spinner";

export default function ProfileImage(): JSX.Element {
  const { ProfileImage } = useInfoCv();
  if (!ProfileImage) return <Spinner />;
  return (
    <div className="relative  max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto lg:ml-auto animate-floating">
      <Image
        src={ProfileImage}
        alt="Profile Image"
        height={300}
        width={350}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
