import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
  Stack,
} from "@chakra-ui/react";

const Errors = ({ errors }) => {
  // let errorsArr = errors;
  // const toast = createStandaloneToast();

  return (
    // <Wrap>
    //   {errorsArr.map((err, index) => (
    //     <WrapItem key={index}>
    //       {toast({
    //         title: err,
    //         position: "top",
    //         status: "error",
    //         containerStyle: {
    //           width: "200px",
    //         },
    //         duration: 2000,
    //       })}
    //     </WrapItem>
    //   ))}
    // </Wrap>
    <Container maxWidth="7xl">
      <Stack spacing={1}>
        {errors.map((err, index) => (
          <Alert status="error" size="40px">
            <AlertIcon />
            <AlertTitle mr={2}>{err}</AlertTitle>
          </Alert>
        ))}
      </Stack>
    </Container>
  );
};

export default Errors;
