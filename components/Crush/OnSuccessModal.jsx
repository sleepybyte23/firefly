import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";

const WEBSITE_DOMAIN = "https://floatboys.wtf/";

export default function OnSuccessModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal size={"xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg={"#292929"}>
          <ModalCloseButton />
          <ModalBody px={10}>
            <Box pt={4}>
              <video
                style={{
                  margin: "auto",
                  borderRadius: 8,
                  border: "3px solid #000",
                }}
                width="320"
                height="240"
                loop
                autoPlay
                muted
              >
                <source src={"/video/floatVideo.mp4"} type="video/mp4" />
              </video>
            </Box>
            <Text fontSize={24} pb={2} pt={4}>
              MINT COMPLETE!
            </Text>
            <Text fontSize={16} pb={8} pt={4}>
              Meanwhile you can mint our other collection{" "}
              <Text as={"a"} href={WEBSITE_DOMAIN} target="_blank">
                "Float Boys"
              </Text>
            </Text>
            <Flex justifyContent={"center"} pb={4}>
              <Button
                as={"a"}
                href={WEBSITE_DOMAIN}
                target="_blank"
                bg={"#fff"}
                color={"#000"}
                fontWeight={"400"}
              >
                Float Boys NFT
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
