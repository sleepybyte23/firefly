import axios from "axios";
import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "./Constants";

export const MintForFree = async (address, signer) => {
  const { data: proof } = await axios.post("/api/getProofForFreeMint", {
    address: address,
  });
  //console.log("Proof", proof);
  if (proof.length && signer) {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.freeMint(proof);
      return {
        type: "success",
        status: 1,
        message: "🎈 Pepe will be soon in your wallet 🎈",
      };
    } catch (err) {
      // console.log("error: ", err.reason);
      return {
        type: "error",
        status: 0,
        message: err.reason,
      };
    }
  } else {
    return {
      type: "error",
      status: 0,
      message: "You are not OG",
    };
  }
};

export const MintForPublic = async (signer, mintQuantity) => {
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  console.log(mintQuantity);
  try {
    // const mintCost = 0;
    // const options = { value: ethers.utils.parseEther(`${mintCost}`) };
    const response = await contract.publicMint(mintQuantity);
    // console.log("response: ", response);
    // console.log("response: ", contract);
    return {
      type: "success",
      status: 1,
      message: "🎈 Pepe will be soon in your wallet 🎈",
    };
  } catch (err) {
    // console.log("error public mint: ", err.reason);
    return {
      type: "error",
      status: 0,
      message: err.reason,
    };
  }
};
