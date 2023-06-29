import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./Connect.module.css";
import { signOut } from "next-auth/react";
import { BsArrowRight, BsExclamationLg } from "react-icons/bs";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { CopyToClipboardButton } from "../util/CopyToClipboard";
// import { CopyToClipboardButton } from "../copyToClipboard";

const ConnectButtonCustom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MobileModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (connected && status === "unauthenticated") {
                  return (
                    <button
                      style={{ marginTop: 60, marginBottom: 60 }}
                      className={styles.PP_inputContainer}
                      type="button"
                    >
                      Loading
                      <div className={styles.stage}>
                        <div className={styles.dotElastic}></div>
                      </div>
                    </button>
                  );
                }

                if (!connected || status === "unauthenticated") {
                  return (
                    <Button
                      fontSize={30}
                      // px={}
                      py={6}
                      // background={"themeColor.900"}
                      // border={"3px solid"}
                      // borderColor={"borderColor.900"}
                      // color={"#50381d"}
                      variant={"default"}
                      border={"2px solid #000"}
                      borderRadius={18}
                      onClick={() => {
                        if (detectMob()) {
                          onOpen();
                        } else {
                          // onOpen();
                          openConnectModal();
                        }
                      }}
                    >
                      Connect Wallet
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      style={{ margin: "40px auto" }}
                      className="iekbcc0 iekbcc9 ju367v71 ju367v7m ju367v86 ju367v6f ju367v4 ju367va0 ju367vn ju367vec ju367vfr ju367vb ju367va ju367v11 ju367v1c ju367v1k ju367v8o _12cbo8i3 ju367v8m _12cbo8i4 _12cbo8i6"
                      onClick={openChainModal}
                      type="button"
                    >
                      <BsExclamationLg /> Wrong network
                    </button>
                  );
                }

                return (
                  <div
                    className={styles.fixOnTopRight}
                    style={{ display: "flex", gap: 12 }}
                  ></div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
};

export const MobileModal = ({ isOpen, onOpen, onClose }) => {
  // const { onCopy, value, setValue, hasCopied } = useClipboard("");
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size={"xs"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody p={6}>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"#fff"}
                border={"1px solid #efefef"}
                p={2}
                borderRadius={8}
                // mb={4}
                onClick={() => {
                  window.location.href =
                    "https://metamask.app.link/dapp/https://float-devv.vercel.app/";
                }}
              >
                <Flex gap={2} alignItems={"center"}>
                  <Image
                    height={10}
                    borderRadius={"50%"}
                    src="/assets/metamask_icon.png"
                  />
                  <Text fontWeight={"700"} color={"#000"}>
                    MetaMask
                  </Text>
                </Flex>
                <BsArrowRight />
              </Flex>
              <CopyToClipboardButton />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

function detectMob() {
  return !window.ethereum;
  // const toMatch = [
  //   /Android/i,
  //   /webOS/i,
  //   /iPhone/i,
  //   /iPad/i,
  //   /iPod/i,
  //   /BlackBerry/i,
  //   /Windows Phone/i,
  // ];

  // return toMatch.some((toMatchItem) => {
  //   return navigator.userAgent.match(toMatchItem);
  // });
}

export default ConnectButtonCustom;
