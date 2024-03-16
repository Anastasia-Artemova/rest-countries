import UpperBar from "./UpperBar";
import { Box, Button, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const ErrorPage = () => {
  return (
    <div>
      <UpperBar />
      <Box margin="40px">
        <NavLink to={"/"}>
          <Button _hover={{ borderColor: "transparent" }} marginBottom="40px">
            <HiArrowLeft style={{ marginRight: "5px" }} /> Back
          </Button>
        </NavLink>
      </Box>
      <Heading>
        <i>Something went wrong</i>
      </Heading>
    </div>
  );
};

export default ErrorPage;
