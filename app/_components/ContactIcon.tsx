"use client";
import React, { JSX } from "react";
import SocialLinks from "./SocialLinks";
import DownloadCv from "./DownloadCv";

export default function ContactIcon(): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full  mt-4 sm:mt-6 md:pr-10 lg:pr-20">
      <SocialLinks />
      <DownloadCv />
    </div>
  );
}
