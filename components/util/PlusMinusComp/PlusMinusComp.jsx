import React from "react";
import { useNumberInput, Button, Input, HStack } from "@chakra-ui/react";
import { useEffect } from "react";

function PlusMinusInput({ defaultValue = 1, max, min, setValue = () => {} }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: defaultValue,
      min: min,
      max: max,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  useEffect(() => {
    setValue(input.value);
  }, [input.value]);

  return (
    <HStack
      maxW="320px"
      border={"4px solid"}
      borderColor={"#000"}
      background="#292929"
      borderRadius={10}
      paddingX={1}
      paddingY={0}
      margin="auto"
      marginBottom={2}
    >
      <Button
        {...dec}
        background={"#000"}
        color="#5a5a50"
        fontSize={24}
        height={30}
        padding={1}
      >
        -
      </Button>
      <Input
        {...input}
        border="none"
        color="#fff"
        fontSize={30}
        fontWeight="700"
        textAlign="center"
        outline={"none"}
        _hover={{ outline: "unset" }}
        _focusVisible={{ border: "unset" }}
        readOnly
      />
      <Button
        {...inc}
        background={"#000"}
        color="#5a5a50"
        fontSize={24}
        height={30}
        padding={1}
      >
        +
      </Button>
    </HStack>
  );
}

export default PlusMinusInput;
