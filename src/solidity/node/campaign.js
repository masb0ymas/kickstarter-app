const Campaign = require("../build/Campaign.json");
const { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider(process.env.YOUR_INFURA_URL);
const web3 = new Web3(provider);

const campaign = (address) => {
  return new web3.eth.Contract(Campaign.abi, address);
};

export default campaign;
