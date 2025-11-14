import React, { JSX } from "react";
import Inputs from "./Inputs";
import SocialLinks from "./SocialLinks";
import { Phone } from "lucide-react";
import SubContact from "./SubContact";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

export default function SendMessage(): JSX.Element {
  const Contacts = [
    {
      icon: <Phone className="w-5 h-5 sm:w-7 sm:h-7" />,
      name: "Phone",
      content: "0669782424",
      link: "tel:0669782424",
    },
    {
      icon: <MdEmail className="w-5 h-5 sm:w-7 sm:h-7" />,
      name: "Email",
      content: "alaamohammedseghir@gmail.com",
      link: "mailto:alaamohammedseghir@gmail.com",
    },
    {
      icon: <FaGlobe className="w-5 h-5 sm:w-7 sm:h-7" />,
      name: "web",
      content: "alaamohammedseghir.com",
      link: "https://alaamohammedseghir.com",
    },
  ];

  return (
    <div className="flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-[2fr_1fr]   px-4 md:px-16 py-8 justify-center items-center  ">
      {/* Left side */}
      <div className=" w-full px-7 sm:px-0   md:w-auto md:pr-20 flex flex-col  justify-center items-center ">
        <h1 className="text-2xl text-gradient md:text-3xl text-transparent font-bold mb-5 bg-clip-text from-pink-500 via-purple-500 to-indigo-500 bg-gradient-to-r">
          Let{"'"}s Work Together
        </h1>
        <Inputs />
      </div>

      {/* Right side */}
      <div className=" flex flex-col  justify-start  gap-5  ">
        <SubContact items={Contacts} />
        <SocialLinks />
      </div>
    </div>
  );
}
