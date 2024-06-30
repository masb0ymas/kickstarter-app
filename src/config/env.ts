import 'dotenv/config'

const APP_NAME = process.env.APP_NAME || "NextJs";
const APP_URL = process.env.APP_URL || "example.com";

const YOUR_MNEMONIC = process.env.YOUR_MNEMONIC || "example.com";
const YOUR_INFURA_URL = process.env.YOUR_INFURA_URL || "example.com";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "";

const env = {
  APP_NAME,
  APP_URL,

  YOUR_MNEMONIC,
  YOUR_INFURA_URL,

  CONTRACT_ADDRESS,
};

export default env;
