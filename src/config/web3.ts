import { Web3 } from "web3";
import env from "./env";

const provider = new Web3.providers.HttpProvider(env.YOUR_INFURA_URL);
const web3 = new Web3(provider);

export default web3;
