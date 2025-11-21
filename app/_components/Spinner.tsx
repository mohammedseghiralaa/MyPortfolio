"use client";
import React, { JSX } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Spinner(): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="scale-50 sm:scale-75 md:scale-100">
        <ThreeDots
          height={80}
          width={80}
          radius={9}
          color="#8500a3"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    </div>
  );
}
