"use client";
import React from "react";
import { ConnectButton as ThirdwebConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import client from "@/lib/thirdweb-client";
import { supportedNetworks } from "@/lib/networks";

export default function ConnectButton() {
    const wallets = [
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        createWallet("me.rainbow"),
    ];

    return (
        <ThirdwebConnectButton 
            connectButton={{ className: "w-full" }} 
            theme="light" 
            chains={supportedNetworks}
            client={client} 
            wallets={wallets} 
        />
    )
}