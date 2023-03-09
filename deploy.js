async function main() {
  console.log("hi");
}

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    // process.exit(1);
  });
