import React from "react";
import Swapper from "@/components/Swapper";

export default function Home() {
  return (
    <main className="gradient-bg flex flex-grow flex-col items-center justify-center p-8">
      <div className="max-w-xl w-full">
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl shadow-lg border border-gray-200">
          <Swapper />
        </div>
      </div>
    </main>
  );
}
