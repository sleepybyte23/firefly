import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  keyframes,
  useBoolean,
  usePrefersReducedMotion,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
// import WalletData from "../../data/FloatBoys_WL.json";
import MintWalletAddress from "../../data/Pepe_FreeMint.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const status = [
  {
    image: "/assets/checker/B3.png",
    val: "Free mint 69",
  },
  {
    image: "/assets/checker/B2.png",
    val: "You are on whitelist",
  },
  {
    image: "/assets/checker/B1.png",
    val: "Sorry no floats for you",
  },
];

const blink = keyframes`
  50% {
    border-color: #725e46;
  }
`;

const WalletChecker = ({ isOpen, onOpen, onClose }) => {
  const inputRef = useRef(null);
  const toast = useToast();
  const [flag, setFlag] = useBoolean();
  const [again, setAgain] = useBoolean();

  const [both, setBoth] = useState(false);
  const [active, setActive] = useState(2);
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${blink} infinite 1s linear`;

  const checkEligibility = () => {
    const userAddress = inputRef.current.value;
    if (userAddress) {
      // const WhiteList = WalletData.find(
      //   (address) => address.toLowerCase() === userAddress.toLowerCase()
      // );
      const Mint = MintWalletAddress.find(
        (address) => address.toLowerCase() === userAddress.toLowerCase()
      );
      // if (WhiteList && Mint) {
      //   setBoth(true);
      // } else if (WhiteList) {
      //   setFlag.on();
      //   if (active === 1) {
      //     setAgain.on();
      //     setTimeout(() => setAgain.off(), 5000);
      //   }
      //   setActive(1);
      //   setBoth(false);
      // } else if (Mint) {
      //   setFlag.on();
      //   if (active === 0) {
      //     setAgain.on();
      //     setTimeout(() => setAgain.off(), 5000);
      //   }
      //   setActive(0);
      //   setBoth(false);
      // } else {
      //   setFlag.off();
      //   setActive(2);
      //   setBoth(false);
      // }
      // setAgain.on();
      // setTimeout(() => setAgain.off(), 5000);
      /*   WhiteList
          ? toast({
              title: "Congratulations!!",
              description: "You are shortlisted.",
              status: "success",
              duration: 6000,
              isClosable: true,
            })
          : toast({
              title: "Sorry!!",
              description: "You are not shortlisted.",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
      console.log("fonded", WhiteList); */
    }
  };

  const pasteAddress = () => {
    navigator.clipboard.readText().then((copiedText) => {
      console.log(copiedText);
      inputRef.current.value = copiedText;
      if (copiedText.length === 42) checkEligibility();
    });
  };

  return (
    <>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="themeColor.900">
          <ModalCloseButton />
          <ModalBody
            bg="themeColor.900"
            borderRadius={8}
            pt={10}
            pb={4}
            border={"5px solid"}
            borderColor={"borderColor.900"}
          >
            <Box pb={4}>
              <Flex
                justifyContent={{ base: "center", md: "space-between" }}
                gap={4}
                px={2}
                mb={8}
              >
                {status.map((stat, i) => {
                  return (
                    <Box
                      key={stat.image}
                      display={{
                        base:
                          both && i == 0
                            ? "block"
                            : !both && active === i
                            ? "block"
                            : "none",
                        md: "block",
                      }}
                      border={
                        (both && i == 0) || (both && i == 1)
                          ? "4px solid"
                          : !both && active === i
                          ? "4px solid"
                          : "none"
                      }
                      borderColor={"red"}
                      transition={"border 0.2s linear"}
                      animation={again && animation}
                    >
                      <Image
                        src={stat.image}
                        maxHeight={{ base: "16rem", md: "unset" }}
                        margin={"auto"}
                        loading="lazy"
                      />
                      <Text
                        fontWeight={"600"}
                        fontSize={26}
                        align={"center"}
                        textTransform={"uppercase"}
                        display={{ base: "block", md: "none" }}
                      >
                        {both ? `${stat.val} / You are on whitelist` : stat.val}
                      </Text>
                      <Text
                        fontWeight={"600"}
                        fontSize={26}
                        align={"center"}
                        textTransform={"uppercase"}
                        display={{ base: "none", md: "block" }}
                      >
                        {stat.val}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
              <Flex>
                <Input
                  type="text"
                  border={"5px solid"}
                  background={"#4c3928"}
                  borderColor={"borderColor.900"}
                  borderRadius={0}
                  height={"auto"}
                  ref={inputRef}
                />
                <Button
                  background={"#291f15"}
                  borderRadius={0}
                  px={8}
                  py={6}
                  onClick={checkEligibility}
                  _hover={{
                    color: "themeColor.900",
                  }}
                >
                  STATUS
                </Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletChecker;
