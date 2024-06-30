import web3 from "~/config/web3";
const CampaignFactory = require("../build/CampaignFactory.json");

const campaignFactory = (address) => {
  return new web3.eth.Contract(CampaignFactory.abi, address);
};

export default campaignFactory;
