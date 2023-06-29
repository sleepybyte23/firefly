import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function MarqueeCustom() {
  const [isMobile] = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Box
        position={"absolute"}
        top={{ base: "0%", md: "0%" }}
        w="100%"
        bg={"#1a1a1d"}
      >
        <Marquee speed={100} gradient={false} autoFill={true}>
          <Flex alignItems={"center"}>
            <Image src="/assets/pepe.png" mx={4} maxH={"2.4vmax"} />
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "6vw", md: "2.2vmax" }}
            >
              PEPE FOR THE PEOPLE
            </Text>
            <Image src="/assets/pepe.png" mx={4} maxH={"2.4vmax"} />
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "6vw", md: "2.2vmax" }}
            >
              FREE MINT
            </Text>
            <Image src="/assets/pepe.png" mx={4} maxH={"2.4vmax"} />
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "6vw", md: "2.2vmax" }}
            >
              ALL FOR THE CULTURE
            </Text>
            <Image src="/assets/pepe.png" mx={4} maxH={"2.4vmax"} />
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "6vw", md: "2.2vmax" }}
            >
              JOSE FOR THE PEOPLE{" "}
            </Text>
          </Flex>
        </Marquee>
      </Box>
    </>
  );
}
