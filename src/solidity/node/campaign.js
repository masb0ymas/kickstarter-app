import web3 from "~/config/web3";
const Campaign = require("../build/Campaign.json");

const campaign = (address) => {
  return new web3.eth.Contract(Campaign.abi, address);
};

export default campaign;
