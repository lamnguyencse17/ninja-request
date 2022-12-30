import { Box, Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: sessionData } = useSession();
  return (
    <Box
      width="100%"
      paddingX={4}
      display="flex"
      justifyContent="space-between"
    >
      <Box>Ninja Request</Box>
      <Box>
        <Button onClick={sessionData ? () => signOut() : () => signIn()}>
          {sessionData ? "logout" : "login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
