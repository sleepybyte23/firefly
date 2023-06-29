import { WalletChecker } from "@/components/Crush";
import { Flex, HStack, Image, useDisclosure } from "@chakra-ui/react";
import { BsInfoLg, BsTwitter } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";

const SocialIconButton = ({ as = "a", href, icon, onClick }) => {
  return (
    <Flex
      alignItems={"center"}
      padding={"10px"}
      borderRadius={"50%"}
      background={"buttonColor"}
      border={"3px solid #000"}
      as={as}
      href={href}
      onClick={onClick}
      target="_blank"
    >
      {icon}
    </Flex>
  );
};

export default function SocialIcons({ direction = "row" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        // display={{ base: "flex", md: "none" }}
        justifyContent={"center"}
        flexDirection={direction}
        gap={1}
        mt={4}
        alignItems={"baseline"}
      >
        <SocialIconButton
          href={"https://twitter.com/josethepepe_nft"}
          icon={<BsTwitter />}
        />
        <SocialIconButton
          href={
            "https://etherscan.io/address/0x0f832f12c9fc07e187a46663fdf176b3108e07c9"
          }
          icon={
            <Image
              src="/assets/etherscan-logo-circle-light.png"
              height={"1.2rem"}
            />
          }
        />
        <SocialIconButton
          href={"https://opensea.io/collection/jose-the-pepe"}
          icon={<SiOpensea size={20} />}
        />
        {/* <SocialIconButton
          onClick={onOpen}
          icon={
            <Image
              src="/assets/checker/WalletChecker_Icon.png"
              height={"1.2rem"}
            />
          }
        /> */}
        {/* <SocialIconButton
          href={
            "https://www.notion.so/floatboys/Jos-the-PePe-ac09f84d6fde40b18e508a4d06065b3a?pvs=4"
          }
          icon={<BsInfoLg />}
        /> */}
      </HStack>
      <WalletChecker isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
