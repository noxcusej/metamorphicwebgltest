import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
    const drop = await sdk.getContract(
      "0xF06BF09AcF7D9a0E4ae0c05a6fBEdA8ACdDEA085",
      "nft-drop"
    );
  
    try {
      await drop.createBatch([
        "https://my-json-server.typicode.com/noxcusej/metamorphicwebgltest/nfts/0",
        "https://my-json-server.typicode.com/noxcusej/metamorphicwebgltest/nfts/1",
      ]);
      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();