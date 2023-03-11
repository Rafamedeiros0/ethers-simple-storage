const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  console.log("hi");
  // compile them in our code
  // compile them separately

  const provider = new ethers.provider.JsonRpcProvider("HTTP://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "0xef1c4e223848be79a36bf204968ba44945a314493f6f88243c9b5b7cab97f08c",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    // process.exit(1);
  });
