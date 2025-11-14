import React, { JSX } from "react";
import ProfileTitle from "./ProfileTitle";
import ContactIcon from "./ContactIcon";

export default function ProfileCard(): JSX.Element {
  return (
    <div className=" flex flex-col gap-3  w-full h-auto ">
      <ProfileTitle />
      <ContactIcon />
    </div>
  );
}
