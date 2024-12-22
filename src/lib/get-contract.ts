import { Address, getContract as thirdwebGetContract, Chain } from "thirdweb";
import client from "@/lib/thirdweb-client";
import { defaultNetwork } from "@/lib/networks";

type GetContractOptions = {
    address: Address;
    chain?: Chain
}

export default function getContract(options: GetContractOptions) {
    return thirdwebGetContract({
        client,
        chain: options.chain ?? defaultNetwork,
        address: options.address
    });
}

