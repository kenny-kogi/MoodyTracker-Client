import React from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const FeedbackForm = ({ feedback, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(3, 1fr )" mt="15">
        <GridItem colSpan={2} mr="6">
          <FormControl>
            <FormLabel htmlFor="title">Title:</FormLabel>
            <Input
              id="title"
              type="text"
              placeholder="Feedback Title"
              name="title"
              value={feedback.title}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2} mb="2" mr="6">
          <FormControl>
            <FormLabel htmlFor="body">Body:</FormLabel>
            <Textarea
              id="body"
              type="text"
              placeholder="Feedback Body"
              name="body"
              value={feedback.body}
              onChange={handleChange}
              height="300px"
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Button
        type="submit"
        mt="35"
        bg="pink.400"
        color="white"
        height="50px"
        width="25%"
        _hover={{ bg: "purple" }}
        fontWeight="bold"
      >
        SEND
      </Button>
    </form>
  );
};

export default FeedbackForm;
