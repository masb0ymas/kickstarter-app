const Campaign = require("./build/Campaign.json");
const web3 = require("./web3");

const campaign = (address) => {
  return new web3.eth.Contract(Campaign.abi, address);
};

export default campaign;
