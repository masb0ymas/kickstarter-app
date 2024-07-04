require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");

const contractFactory = require("../build/CampaignFactory.json");

const provider = new HDWalletProvider(
  process.env.YOUR_MNEMONIC,
  process.env.YOUR_INFURA_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  try {
    const result = await new web3.eth.Contract(contractFactory.abi)
      .deploy({ data: contractFactory.evm.bytecode.object })
      .send({ gas: "1400000", from: accounts[0] });

    console.log(
      "Contract 'Campaign Factory' deployed to",
      result.options.address
    );
  } catch (error) {
    console.log(error);
  }

  provider.engine.stop();
};

deploy();
