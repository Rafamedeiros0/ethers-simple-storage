const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  console.log("hi");
  // compile them in our code
  // compile them separately

  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "0xdf55e214b4feff7f0b90c3663e32ac74e7a6a50fb9c7bc69d5e3a1b49bdaf371",
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
