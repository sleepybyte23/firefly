import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import addressesFree from "../../data/Pepe_FreeMint.json";

export default function handler(req, res) {
  const leaves = addressesFree.map((x) => keccak256(x));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const buf2hex = (x) => "0x" + x.toString("hex");
  console.log(buf2hex(tree.getRoot()));
  const leaf = keccak256(req.body.address); // address from wallet using walletconnect/metamask
  const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
  console.log("step proof --->", proof);
  proof && res.send(proof);
}
