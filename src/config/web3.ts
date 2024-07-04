import Web3 from "web3";
import { Eip1193Provider } from "web3/lib/commonjs/providers.exports";
import env from "./env";

let web3: any;

// @ts-expect-error
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // @ts-expect-error
  const ethereum: Eip1193Provider = window.ethereum;

  // We are in the browser and metamask is running.
  ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(ethereum);

  console.log("Request Account");
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(env.YOUR_INFURA_URL);
  web3 = new Web3(provider);

  console.log("Provider");
}

export default web3;
