import fs from "fs";
import { arweave } from "../apis/arweaveConfig.api";

const generateWallet = async () => {
    try {
        const key = await arweave.wallets.generate();
        fs.writeFileSync('wallets.json', JSON.stringify(key));
        const address = await arweave.wallets.jwkToAddress(key);
        console.log('Created Wallet Address = ', address);
    } catch (error) {
        console.error("Error creating a wallet", error);
    }
}
generateWallet();