"use client";
import React from "react";
import ConnectButton from "./ConnectButton";
import Wrapper from "./Wrapper";

export default function Header() {
    return (
        <header className="border-b border-gray-200 backdrop-blur-xl bg-white/50">
            <div className="flex p-4 max-w-7xl mx-auto justify-between w-full">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                    SuperSwap
                </h1>
                <div className="flex gap-3 items-stretch">
                    <Wrapper />
                    <ConnectButton />
                </div>
            </div>
        </header>
    )
}