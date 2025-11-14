import React, { JSX, ReactNode } from "react";
type SubContent = {
  icon: ReactNode;
  name: string;
  content: string;
  link?: string;
};
type SubContactProps = {
  items: SubContent[];
};
export default function SubContact({ items }: SubContactProps): JSX.Element {
  return (
    <div className="flex flex-col  gap-4 sm:gap-6 md:gap-8">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fuchsia-600 text-stone-100 rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-lg sm:text-xl"
          >
            {item.icon}
          </a>

          <div className=" font-medium text-sm sm:text-base md:text-lg">
            <p className="text-sm sm:text-base md:text-lg">{item.name}</p>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
