import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { WalletChecker } from ".";
import ConnectButtonCustom from "../ConnectButton";
import { useAccount, useContractRead, useSigner } from "wagmi";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { MintForFree, MintForPublic } from "@/utils/MintFunctions";
import { AiOutlineLogout } from "react-icons/ai";
import { ABI, CONTRACT_ADDRESS } from "@/utils/Constants";
import SocialIcons from "../util/SocialIcons";
import Image from "next/image";
import OnSuccessModal from "./OnSuccessModal";
import { PlusMinusComp } from "../util/PlusMinusComp";

export default function CitrusCrush() {
  // const MAX_SUPPLY = 6969;
  const toast = useToast();
  const [mintQuantity, setMintQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: signer } = useSigner();
  const { address, isConnected } = useAccount();
  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess,
  } = useDisclosure();
  const {
    data: tokenSupply,
    isError,
    status: contractStatus,
    isLoading: isContractLoading,
  } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "totalSupply",
  });

  // TO CHANGE
  const MIN_MINT = 5;
  const MAX_MINT = 5;
  const DEFAULT_VALUE = 5;

  // Public Mint
  const mintPublic = async () => {
    const publicMint = await MintForPublic(signer, mintQuantity);
    console.log("publicMint ---->", publicMint);
    if (publicMint.status) {
      toast({
        title: publicMint.message,
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      onOpenSuccess();
    } else {
      toast({
        title: publicMint.message.split(":")[1]
          ? publicMint.message.split(":")[1]
          : publicMint.message,
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  //Free Mint
  const mintFree = async () => {
    const freeMint = await MintForFree(address, signer);
    console.log("freeMint ---->", freeMint);
    if (freeMint.status) {
      toast({
        title: freeMint.message,
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      onOpenSuccess();
    } else {
      toast({
        title: freeMint.message.split(":")[1]
          ? freeMint.message.split(":")[1]
          : freeMint.message,
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
    // freeMint.type === "error"
    //   ? toast({
    //       title: freeMint.message.split(":")[1]
    //         ? freeMint.message.split(":")[1]
    //         : freeMint.message,
    //       status: "error",
    //       duration: 7000,
    //       isClosable: true,
    //     })
    //   : toast({
    //       title: freeMint.message,
    //       status: "success",
    //       duration: 7000,
    //       isClosable: true,
    //     });
  };

  return (
    <>
      <Flex
        height={{ base: "unset", lg: "100vh" }}
        minH={{ base: "100vh", lg: "unset" }}
        transform={"translate(0px, -10%)"}
        direction={"column"}
        overflow={"hidden"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          paddingTop={"6rem"}
          paddingBottom={"2rem"}
          px={{ base: 4, sm: 0 }}
          textShadow={"#262626 1px 0 10px"}
        >
          <Box position={"relative"} height={{ base: "16rem", md: "26rem" }}>
            <Image
              src="/assets/LogoFF.png"
              fill={true}
              margin={"auto"}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
          {/* <Text fontSize={36} my={6} textAlign={"center"}>
            {tokenSupply ? Number(tokenSupply) : "--"}/{MAX_SUPPLY}
          </Text> */}
          {/* TO CHANGE */}
          {/* <Text fontSize={18} my={6} textAlign={"center"}>
            Free OG MINT
          </Text>
          <Text
            fontSize={{ base: "3vw", sm: "2vw", lg: 18 }}
            my={6}
            textAlign={"center"}
          >
            {address && `Your Address: ${address}`}
          </Text>
          <PlusMinusComp
            max={MAX_MINT}
            min={MIN_MINT}
            defaultValue={DEFAULT_VALUE}
            setValue={setMintQuantity}
          /> */}
          <Flex
            gap={4}
            mt={6}
            pb={{ base: address ? 0 : 4, md: 0 }}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {address && isConnected ? (
              <>
                {/* <Button
                  fontSize={30}
                  border={"3px solid"}
                  borderColor={"#000"}
                  onClick={mintPublic}
                  // onClick={onOpenSuccess}
                >
                  PEPE (PUBLIC FREE MINT)
                </Button> */}

                <Button
                  fontSize={30}
                  border={"3px solid"}
                  borderColor={"#000"}
                  onClick={mintFree}
                  // onClick={onOpenSuccess}
                >
                  PEPE OG (FREE MINT)
                </Button>

                <Button
                  fontSize={30}
                  border={"3px solid"}
                  borderColor={"#000"}
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  <AiOutlineLogout color="#fff" />
                </Button>
              </>
            ) : (
              <ConnectButtonCustom />
            )}
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent={"center"}
          >
            <SocialIcons />
          </Flex>
        </Box>
      </Flex>
      <WalletChecker isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <OnSuccessModal
        isOpen={isOpenSuccess}
        onOpen={onOpenSuccess}
        onClose={onCloseSuccess}
      />
    </>
  );
}
