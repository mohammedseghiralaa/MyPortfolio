import React, { JSX } from "react";
import SubTitle from "./SubTitle";
import { Terminal } from "lucide-react";
import Image from "next/image";
import Technologies from "./Technologies";
export default function Tools(): JSX.Element {
  const technologies = [
    {
      name: "HTML",
      image: <Image src="/images/html.png" alt="HTML" width={80} height={80} />,
    },
    {
      name: "CSS",
      image: <Image src="/images/css.png" alt="CSS" width={80} height={80} />,
    },
    {
      name: "Javascript",
      image: (
        <Image src="/images/js.png" alt="Javascript" width={80} height={80} />
      ),
    },
    {
      name: "Typescript",
      image: (
        <Image src="/images/ts.png" alt="Typescript" width={80} height={80} />
      ),
    },
    {
      name: "React",
      image: (
        <Image src="/images/react.png" alt="React" width={80} height={80} />
      ),
    },
    {
      name: "Next.Js",
      image: (
        <Image src="/images/nextjs.png" alt="Next.js" width={80} height={80} />
      ),
    },
    {
      name: "Tailwind",
      image: (
        <Image
          src="/images/tailwind.png"
          alt="Tailwind"
          width={80}
          height={80}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <SubTitle
        title="Tools"
        icon={
          <Terminal
            style={{ color: "var(--text-color)" }}
            className="w-7 h-7"
          />
        }
      />
      <Technologies technologies={technologies} />
    </div>
  );
}
