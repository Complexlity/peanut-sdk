import peanut from "../../index.js"; // local
// import peanut from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers'; // ethers v6
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

// const CHAINID = 5; // goerli
// const RPC_URL = "https://rpc.ankr.com/eth_goerli";
const CHAINID = 137; // matic mainnet
const RPC_URL = "https://polygon.llamarpc.com";

// create goerli wallet with optimism rpc
const wallet = new ethers.Wallet(
    process.env.TEST_WALLET_PRIVATE_KEY,
    new ethers.providers.JsonRpcProvider(RPC_URL)
);

// print version of ethers
console.log("ethers version: ", ethers.version);
console.log("peanut version: ", peanut.version);

// create link
const { links, txReceipt } = await peanut.createLinks({
    signer: wallet,
    chainId: CHAINID,
    numberOfLinks: 3,
    tokenAmount: 0.00001337,
    tokenType: 0, // 0 for ether, 1 for erc20, 2 for erc721, 3 for erc1155
    verbose: true,
    trackId: "campaignId?" // optional, user defined string

});

console.log(links);
console.log(txReceipt);



// get status of link
console.log((await peanut.getLinkStatus({signer: wallet, link: links[0]})).claimed);



// claim link
console.log("claiming link...");
await new Promise(r => setTimeout(r, 6000));
const claimTx = await peanut.claimLink({ signer: wallet, link: links[0] });
console.log("claimTx: ", claimTx.hash);


// // claim link
// await new Promise(r => setTimeout(r, 6000));
// // const claimTx = await peanut.claimLink({ signer: wallet, link: link });
// // console.log("claimTx: ", claimTx.hash);

// const res = await peanut.claimLinkGasless(link, wallet.address, process.env.PEANUT_DEV_API_KEY);
// console.log(res);

// // get status of link
// console.log((await peanut.getLinkStatus({signer: wallet, link: link})).claimed);