import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
    const drop = await sdk.getContract(
      "0x5D4aB69990Bff98e2c568eaBE4865a8FdED47051",
      "nft-drop"
    );
  
    try {
      await drop.createBatch([
        "https://my-json-server.typicode.com/jarrodwatts/centralized-nft-metadata/nfts/0",
        "https://my-json-server.typicode.com/jarrodwatts/centralized-nft-metadata/nfts/1",
      ]);
      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();