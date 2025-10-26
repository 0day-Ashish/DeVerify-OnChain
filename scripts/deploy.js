async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying DeverifyBadge with account:", deployer.address);

  const Deverify = await ethers.getContractFactory("DeverifyBadge");
  const contract = await Deverify.deploy("Deverify Badge", "DVB");
  await contract.waitForDeployment(); // <-- Updated for Ethers v6

  const contractAddress = await contract.getAddress(); // <-- Updated for Ethers v6
  console.log("✅ DeverifyBadge deployed to:", contractAddress);
  console.log("\nNext steps:");
  console.log("1️⃣ Copy this address to your frontend .env as NEXT_PUBLIC_CONTRACT_ADDRESS");
  console.log("2️⃣ Copy ABI from artifacts/contracts/DeverifyBadge.sol/DeverifyBadge.json");
  console.log("3️⃣ Call mint(user, tokenURI) from frontend or backend to issue badges!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
