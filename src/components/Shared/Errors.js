import React from "react";
import { createStandaloneToast, Wrap, WrapItem } from "@chakra-ui/react";

const Errors = ({ errors }) => {
  const toast = createStandaloneToast();
  console.log(errors);
  return (
    <Wrap>
      {errors.map((err, index) => (
        <WrapItem key={index}>
          {toast({
            title: err,
            position: "top",
            status: "error",
            containerStyle: {
              width: "200px",
            },
            duration: 2000,
          })}
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Errors;
