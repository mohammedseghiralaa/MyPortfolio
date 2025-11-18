"use client";
import React, { JSX } from "react";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./ProfileImage";

export default function Home(): JSX.Element {
  return (
    <div
      id="/"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full px-4 md:px-16 pt-20 md:pt-30  gap-8"
    >
      <ProfileCard />
      <ProfileImage />
    </div>
  );
}
