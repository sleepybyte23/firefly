import Head from "next/head";
import { FloatBoys, MarqueeCustom } from "@/components";
import { CitrusCrush, WalletChecker } from "@/components/Crush";
import { Box, VStack, useDisclosure } from "@chakra-ui/react";
import { BsInfoLg, BsTwitter } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";
import SocialIcons from "@/components/util/SocialIcons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>José the PePe</title>
        <meta
          name="description"
          content="José the Pepe for the people. Bringing green to your PFP, one Pepe at a time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/FavIcon.jpeg" />
      </Head>
      {/* <MarqueeCustom /> */}
      <CitrusCrush />
      {/* bottom center like frog blinking in bottom center in joseThePepe */}
      {/* <Box display={{ base: "block", lg: "block" }}>
        <FloatBoys />
      </Box> */}
      {/* start powered by nolabs */}
      <Box
        position={"absolute"}
        transform={{ base: "rotate(-90deg)", sm: "unset" }}
        bottom={{ base: "3rem", sm: "2rem" }}
        left={{ base: "-2rem", sm: 2 }}
        width={"8rem"}
        height={"2.4rem"}
      >
        <Box
          as="a"
          href="https://www.nolabs.wtf/"
          target="_blank"
          position={"relative"}
          height={"-webkit-fill-available"}
          display={"block"}
        >
          <Image src="/assets/checker/NoLabs.png" fill={true} />
        </Box>
      </Box>
      {/* end powered by nolabs */}
      <Box
        position={"absolute"}
        display={{ base: "none", md: "block" }}
        bottom={"2rem"}
        right={10}
      >
        <SocialIcons direction="column" />
      </Box>
    </>
  );
}
