import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xc5357966fE7874Dac758595A1EB5A36f59135b78",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "BentoDAO Founder NFT",
        description: "This NFT will give you founder access to BentoDAO!",
        image: readFileSync("scripts/assets/nftfounder.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
