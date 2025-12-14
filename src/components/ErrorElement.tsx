import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <h1>Oops...</h1>
        <p>
          {isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}
        </p>
      </Box>
    </>
  );
};

export default ErrorElement;
