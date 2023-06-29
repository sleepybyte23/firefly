import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function FloatBoys() {
  return (
    <>
      <Box
        position={"fixed"}
        bottom={0}
        left="50%"
        transform={"translate(-50%, 0)"}
        w="100%"
        zIndex={-1}
      >
        <Box
          maxHeight={"20rem"}
          position={"relative"}
          // className={styles.animationFloat}
          height={"26vmax"}
          // transform={"translate(0px, 25%)"}
        >
          <Image
            src="/assets/pepe.gif"
            fill={true}
            margin={"auto"}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
