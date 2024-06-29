const CampaignFactory = require("../build/CampaignFactory.json");
const { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider(process.env.YOUR_INFURA_URL);
const web3 = new Web3(provider);

const campaignFactory = (address) => {
  return new web3.eth.Contract(CampaignFactory.abi, address);
};

export default campaignFactory;
