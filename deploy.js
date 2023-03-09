async function main() {
  console.log("hi");
  // compile them in our code
  // compile them separately
}

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    // process.exit(1);
  });
